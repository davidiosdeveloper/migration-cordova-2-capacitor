import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-socialsharing-page',
  templateUrl: './socialsharing-page.html',
  styleUrls: ['./socialsharing-page.scss'],
})
export class SocialsharingPage {

  constructor(private socialSharing: SocialSharing, private ui: UtilsService) { }

  public async shareData() {
      await this.socialSharing.share(
        'Hola desde mi PoC Ionic + Cordova',
        'Prueba Social Sharing',
        '',
        'https://ionicframework.com'
      ).catch(() => {
        this.ui.showInfoAlert({title: 'Error', content: 'Ocurrió un error al momento de compartir los datos.'});
      });
  }

  public async shareOnWhatsApp() {
    try {
      await this.socialSharing.shareViaWhatsApp(
        'Mensaje de prueba',
        '',
        'https://ionicframework.com'
      );
    } catch (error) {
      await this.ui.showInfoAlert({
        title: 'WhatsApp no disponible',
        content: 'No se pudo abrir WhatsApp.'
      });
    }
  }
}
