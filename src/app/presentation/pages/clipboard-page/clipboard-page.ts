import { Component } from '@angular/core';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { AlertController } from '@ionic/angular';
import { Message } from 'src/app/core/models/message-model';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-clipboard-page',
  templateUrl: './clipboard-page.html',
  styleUrls: ['./clipboard-page.scss'],
})
export class ClipboardPage {
  textToCopy: string = 'Add some text to copy to clipboard';
  pastedText: string = '';

  constructor(
    private clipboard: Clipboard,
    private ui: UtilsService
  ) {}

  async copyText() {
    try {
      await this.clipboard.copy(this.textToCopy);
    } catch (error) {
      console.error('Error copiando texto:', error);
    }
  }

  async pasteText() {
    try {
      const text = await this.clipboard.paste();
      this.pastedText = text;
    } catch (error) {
      console.error('Error pegando texto:', error);
    }
  }
}
