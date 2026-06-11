import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

@Component({
    selector: 'app-app-version-page',
    templateUrl: './app-version-page.html',
    styleUrls: ['./app-version-page.scss'],
    standalone: false
})
export class AppVersionPage {

  public app: any = {};
  public info: any = {};

  constructor() {}

  ionViewDidEnter() {
    this.loadVersion();
    this.loadDeviceInfo();
  }

  async loadVersion() {
    this.app = await App.getInfo();
    console.log('App Version:', this.app.version);
    console.log('Build Number:', this.app.build);
    console.log('Bundle ID:', this.app.id);
    console.log('App Name:', this.app.name);
  }

  private async loadDeviceInfo() {
    this.info = await Device.getInfo();
  }
}
