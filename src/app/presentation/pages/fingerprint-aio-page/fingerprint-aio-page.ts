import { Component } from '@angular/core';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-fingerprint-aio-page',
  templateUrl: './fingerprint-aio-page.html',
  styleUrls: ['./fingerprint-aio-page.scss'],
})
export class FingerprintAioPage {

  constructor(private faio: FingerprintAIO, private ui: UtilsService) {}

  public async authenticate() {
    try {

      const available = await this.faio.isAvailable();

      console.log('Biometría disponible:', available);

      await this.faio.show({
        title: 'Auth required',
        subtitle: 'Access with touch id / face id',
        description: 'Use your biometric info to continue',
        fallbackButtonTitle: 'Use PIN',
        disableBackup: false
      });

      await this.ui.showInfoAlert({
        title: 'FingerprintAio',
        content: 'Biometric validated successfully',
      });

    } catch (error) {

      console.error('Error biometría:', error);
      await this.ui.showInfoAlert({
        title: 'FingerprintAio',
        content: 'Error validating Biometric info',
      });

    }
  }
}
