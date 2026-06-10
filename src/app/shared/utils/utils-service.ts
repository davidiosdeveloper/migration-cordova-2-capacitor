import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from 'src/app/core/models/message-model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private alertController: AlertController) {}

  async showInfoAlert(message: Message) {
    const alert = await this.alertController.create({
      header: message.title,
      message: message.content,
      buttons: ['Aceptar']
    });

    setTimeout(async () => {
      await alert.present();
    }, 300);
  }
}
