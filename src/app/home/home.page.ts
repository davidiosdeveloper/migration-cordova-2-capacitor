import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public tests = [
    {
      title: 'Hardware / Network',
      route: '/hardware'
    },
    {
      title: 'Clipboard',
      route: '/clipboard'
    },
    {
      title: 'App version / Device info',
      route: '/appversion'
    },
    {
      title: 'Status Bar',
      route: '/statusbar'
    },
    {
      title: 'In app browser',
      route: '/inappbrowser'
    },
    {
      title: 'Files',
      route: '/files'
    },
    {
      title: 'FingerprintAIO',
      route: '/fingerprintaio'
    },
    {
      title: 'Social sharing',
      route: '/socialsharing'
    },
    {
      title: 'Firebase',
      route: '/firebase'
    },
  ];

  constructor() {}
}
