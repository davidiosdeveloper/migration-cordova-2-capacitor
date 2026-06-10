import { Component } from '@angular/core';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { ListItem } from 'src/app/core/models/item-model';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-hardware-page',
  templateUrl: './hardware-page.html',
  styleUrls: ['./hardware-page.scss'],
})
export class HardwarePage {

  public photo: any;

  public tests: ListItem[] = [
    { title: 'Check Location', id: 1 },
    { title: 'Check Camera permission', id: 2 },
    { title: 'Check Bluetooth permission', id: 3 },
  ];

  public status = 'unknown';
  public type = 'unknown';

  constructor(
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private camera: Camera,
    private locationAccuracy: LocationAccuracy,
    private openSettings: OpenNativeSettings,
    private network: Network,
    private ui: UtilsService
  ) {}

  ionViewDidEnter() {
    this.listenNetwork();
  }

  public performTest(test: ListItem) {
    switch (test.id) {
      case 1:
        this.checkLocationEnabled()
        break;
      case 2:
        this.checkCameraPermission()
        break;
      case 3:
        this.checkBluetoothPermission()
        break;
      default: break;
    }
  }

  listenNetwork() {
    this.status = this.network.type !== 'none' ? 'online' : 'offline';
    this.type = this.network.type;

    this.network.onConnect().subscribe(() => {
      this.status = 'online';
    });

    this.network.onDisconnect().subscribe(() => {
      this.status = 'offline';
    });
  }

  async checkLocationEnabled() {
    try {
      const enabled = await this.diagnostic.isLocationEnabled();

      if (!enabled) {
        await this.locationAccuracy.request(
          this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
      }

      const position = await this.geolocation.getCurrentPosition();

      console.log('GPS habilitado:', enabled);
      console.log('Latitud:', position.coords.latitude);
      console.log('Longitud:', position.coords.longitude);

      await this.ui.showInfoAlert({
        title: 'GPS habilitado',
        content: `Latitud: ${position.coords.latitude}<br>Longitud: ${position.coords.longitude}`
      });

    } catch (error) {
      console.error('Error GPS', error);
    }
  }

  async checkCameraPermission() {
    try {

      const status = await this.diagnostic.getCameraAuthorizationStatus();

      if (status === this.diagnostic.permissionStatus.GRANTED) {
        await this.takePicture();
        return;
      }

      const result = await this.diagnostic.requestCameraAuthorization();

      if (result === this.diagnostic.permissionStatus.GRANTED) {
        await this.takePicture();
        return;
      }

      await this.ui.showInfoAlert({
        title: 'Permiso requerido',
        content: 'Activa la cámara desde ajustes'
      });

      this.openSettings.open('application_details');

    } catch (error) {
      console.error('Error cámara:', error);
    }
  }

  async checkBluetoothPermission() {
    try {

      const available = await this.diagnostic.isBluetoothAvailable();
      const enabled = await this.diagnostic.isBluetoothEnabled();

      if (!available) {
        await this.ui.showInfoAlert({
          title: 'Bluetooth no disponible',
          content: 'Este dispositivo no soporta Bluetooth'
        });
        return;
      }

      if (!enabled) {
        await this.ui.showInfoAlert({
          title: 'Bluetooth desactivado',
          content: 'Actívalo desde ajustes del sistema'
        });

        this.openSettings.open('bluetooth');
        return;
      }

      const authStatus =
        await this.diagnostic.getBluetoothAuthorizationStatus();

      if (authStatus !== this.diagnostic.permissionStatus.GRANTED) {
        await this.diagnostic.requestBluetoothAuthorization();
      }

      await this.ui.showInfoAlert({
        title: 'Status Bluetooth',
        content: `Bluetooth activo: ${enabled}<br>Disponible: ${available}`
      });

    } catch (error) {
      console.error(error);
    }
  }

  async takePicture() {
    try {

      const image = await this.camera.getPicture({
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
      });

      console.log('Foto obtenida');

      this.photo = `data:image/jpeg;base64,${image}`;

    } catch(error) {
      console.error(error);
    }
  }

}
