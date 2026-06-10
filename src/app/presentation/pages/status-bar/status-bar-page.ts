import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar-page.html',
  styleUrls: ['./status-bar-page.scss'],
})
export class StatusBarPage {

  public color: string = '#3880ff';

  constructor(private statusBar: StatusBar) {}

  ionViewDidEnter() {
    this.applyDefaultStyle();
  }

  changeColor() {
    this.statusBar.backgroundColorByHexString(this.color);
  }

  setDarkStyle() {
    this.statusBar.styleLightContent();
  }

  setLightStyle() {
    this.statusBar.styleDefault();
  }

  hide() {
    this.statusBar.hide();
  }

  show() {
    this.statusBar.show();
  }

  applyDefaultStyle() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#000000');
  }
}
