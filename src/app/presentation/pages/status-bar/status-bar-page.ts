import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar-page.html',
  styleUrls: ['./status-bar-page.scss'],
})
export class StatusBarPage {

  public color: string = '#3880ff';

  constructor() {
    // iOS only: UIViewControllerBasedStatusBarAppearance set to YES in Info.plist required!
    window.addEventListener('statusTap', function () {
      console.log('statusbar tapped');
    });

    // Android ony
    this.configAndroid();
  }

  ionViewDidEnter() {
    this.applyDefaultStyle();
  }

  async configAndroid() {
    await StatusBar.setOverlaysWebView({
      overlay: false
    });
  }

  async changeColor() {
    await StatusBar.setBackgroundColor({ 
      color: this.color 
    });
  }

  async setDarkStyle() {
    console.log('$$$ Setting darkmode')
    await StatusBar.setStyle({ style: Style.Dark });
  }

  async setLightStyle() {
    await StatusBar.setStyle({ style: Style.Light });
  }

  async hide() {
    await StatusBar.hide();
  }

  async show() {
    await StatusBar.show();
  }

  async applyDefaultStyle() {
    await this.show();
    await this.setLightStyle();
  }
}
