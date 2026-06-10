import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils-service';

import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-socialsharing-page',
  templateUrl: './socialsharing-page.html',
  styleUrls: ['./socialsharing-page.scss'],
})
export class SocialsharingPage {

  constructor(private ui: UtilsService) { }

  public async shareData() {
      await Share.share({
        title: 'Prueba Social Sharing',
        text: 'Hola desde mi PoC Ionic + Capacitor',
        url: 'https://ionicframework.com',
        dialogTitle: 'Compartir'
      }).catch(() => {
        this.ui.showInfoAlert({title: 'Error', content: 'Ocurrió un error al momento de compartir los datos.'});
      });
  }

  public async shareOnWhatsApp() {
    try {

      if (Capacitor.getPlatform() === 'android') {

        const result = await AppLauncher.canOpenUrl({
          url: 'com.whatsapp'
        });

        if (!result.value) {
          this.ui.showInfoAlert({title: 'Error', content: 'Whatsapp not installed.'});
        }
      }

      const message =
        encodeURIComponent('Testing message');

      await AppLauncher.openUrl({
        url: `https://wa.me/?text=${message}`
      });

    } catch (error) {

      await this.ui.showInfoAlert({
        title: 'Error',
        content: 'WhatsApp not available'
      });
    }
  }
}
