import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-inapp-browser-page',
  templateUrl: './inapp-browser-page.html',
  styleUrls: ['./inapp-browser-page.scss'],
})
export class InappBrowserPage {

  constructor(private iab: InAppBrowser) {
    this.openGoogle();
  }

  openGoogle() {
    this.iab.create('https://google.com', '_blank');
  }

}






