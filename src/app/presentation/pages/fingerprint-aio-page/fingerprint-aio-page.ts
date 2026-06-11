import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils-service';
import { NativeBiometric } from "@capgo/capacitor-native-biometric";

@Component({
  selector: 'app-fingerprint-aio-page',
  templateUrl: './fingerprint-aio-page.html',
  styleUrls: ['./fingerprint-aio-page.scss'],
})
export class FingerprintAioPage {

  constructor(private ui: UtilsService) {}

  public async authenticate() {
    try {

      await NativeBiometric.verifyIdentity({
        reason: "Authenticate to access your account",
        title: "Biometric Login",
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
