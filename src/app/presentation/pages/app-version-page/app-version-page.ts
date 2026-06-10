import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-app-version-page',
  templateUrl: './app-version-page.html',
  styleUrls: ['./app-version-page.scss'],
})
export class AppVersionPage {

  public version: string = '';
  public info: any = {};

  constructor(private appVersion: AppVersion, private device: Device) {}

  ionViewDidEnter() {
    this.loadVersion();
    this.loadDeviceInfo();
  }

  async loadVersion() {
    try {
      const versionNumber = await this.appVersion.getVersionNumber();
      this.version = versionNumber;

    } catch (error) {
      console.error('Error obteniendo versión:', error);
      this.version = 'N/A';
    }
  }

  private loadDeviceInfo() {
    this.info = {
      model: this.device.model,
      platform: this.device.platform,
      uuid: this.device.uuid,
      version: this.device.version,
      manufacturer: this.device.manufacturer,
      isVirtual: this.device.isVirtual
    };
  }
}
