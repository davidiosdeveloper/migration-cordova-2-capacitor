import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-firebase-page',
  templateUrl: './firebase-page.html',
  styleUrls: ['./firebase-page.scss'],
})
export class FirebasePage {

  public token = '';

  constructor(
    private ui: UtilsService
  ) {}

  async testAnalytics() {
    try {
      await FirebaseAnalytics.logEvent({
        name: 'poc_event',
        params: {
          source: 'capacitor'
        }
      });

      await this.ui.showInfoAlert({
        title: 'Analytics',
        content: 'Evento enviado'
      });

    } catch(error) {
      console.error(error);
    }
  }

  async setScreen() {
    await FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebasePage'
    });
  }

  async setUser() {
    await FirebaseAnalytics.setUserId({
      userId: '12345'
    });

    await FirebaseAnalytics.setUserProperty({
      key: 'segment',
      value: 'premium'
    });
  }

  // HasPermission / GrantPermission
  async requestPermission() {
    const permissions = await FirebaseMessaging.requestPermissions();

    console.log(permissions);

    await this.ui.showInfoAlert({
      title: 'Permisos',
      content: JSON.stringify(permissions)
    });
  }

  async getToken() {
    const result = await FirebaseMessaging.getToken();

    this.token = result.token;

    console.log(result.token);

    await this.ui.showInfoAlert({
      title: 'FCM Token',
      content: result.token
    });
  }

  async listenTokenRefresh() {
    await FirebaseMessaging.addListener(
      'tokenReceived',
      event => {
        this.ui.showInfoAlert({
          title: 'Nuevo token:',
          content: event.token
        });
      }
    );
  }

  async listenMessages() {
    await FirebaseMessaging.addListener(
      'notificationReceived',
      notification => {
        this.ui.showInfoAlert({
          title: 'Nuevo push:',
          content: 'Push message recibido'
        });
      }
    );
  }
}