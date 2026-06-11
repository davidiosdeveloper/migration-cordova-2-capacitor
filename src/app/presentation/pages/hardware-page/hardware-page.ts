import { Component } from '@angular/core';
import { ListItem } from 'src/app/core/models/item-model';
import { UtilsService } from 'src/app/shared/utils/utils-service';

import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-hardware-page',
  templateUrl: './hardware-page.html',
  styleUrls: ['./hardware-page.scss'],
})
export class HardwarePage {

  public photo: any;

  public tests: ListItem[] = [
    { title: 'Geolocation', id: 1 },
    { title: 'Camera', id: 2 },
    { title: 'Bluetooth', id: 3 },
  ];

  public status = 'unknown';
  public type = 'unknown';

  constructor(private ui: UtilsService) {}

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
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });

    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();
      this.status = status.connected ? 'online' : 'offline';
      this.type = status.connectionType;
    };
  }

  async checkLocationEnabled() {
    try {

      const permissions =
        await Geolocation.requestPermissions();

      console.log('Permisos:', permissions);

      const position =
        await Geolocation.getCurrentPosition({
          enableHighAccuracy: true
        });

      await this.ui.showInfoAlert({
        title: 'Ubicación obtenida',
        content: `
          Latitud: ${position.coords.latitude}<br>
          Longitud: ${position.coords.longitude}
        `
      });

    } catch (error) {

      console.error(error);

      await this.ui.showInfoAlert({
        title: 'Error',
        content: 'No fue posible obtener la ubicación'
      });
    }
  }

  async checkBluetoothPermission() {
    try {

      await BleClient.initialize();

      const enabled = await BleClient.isEnabled();

      if (!enabled) {

        await this.ui.showInfoAlert({
          title: 'Bluetooth desactivado',
          content: 'Debes activar Bluetooth para continuar.'
        });

        // this.openSettings.open('bluetooth');
        return;
      }

      const permissions =
        await BleClient.requestLEScan(
          {},
          () => {}
        ).then(() => true)
        .catch(() => false);

      await this.ui.showInfoAlert({
        title: 'Bluetooth habilitado',
        content: `
          Bluetooth activo: Sí<br>
          Permisos concedidos: ${permissions}
        `
      });

    } catch (error) {

      console.error(error);

      await this.ui.showInfoAlert({
        title: 'Error',
        content: 'No fue posible verificar Bluetooth.'
      });
    }
  }

  async checkCameraPermission() {
    try {

      const permissions = await Camera.checkPermissions();

      console.log('Permisos cámara:', permissions);

      if (permissions.camera === 'granted') {
        await this.takePicture();
        return;
      }

      const request = await Camera.requestPermissions();

      if (request.camera === 'granted') {
        await this.takePicture();
        return;
      }

      await this.ui.showInfoAlert({
        title: 'Permiso requerido',
        content: 'Debes habilitar la cámara para continuar.'
      });

    } catch (error) {
      console.error('Error cámara:', error);
    }
  }

  async takePicture() {
    try {

      const image = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      this.photo = image.webPath ?? '';

    } catch (error) {

      console.error(error);
    }
  }

}
