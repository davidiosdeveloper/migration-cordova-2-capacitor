import { Component } from '@angular/core';
// import { DefaultWebViewOptions, InAppBrowser } from '@capacitor/inappbrowser';

@Component({
  selector: 'app-inapp-browser-page',
  templateUrl: './inapp-browser-page.html',
  styleUrls: ['./inapp-browser-page.scss'],
})
export class InappBrowserPage {

  async ionViewDidEnter() {
    await this.openGoogle();
  }

  async openGoogle() {
  }
}




