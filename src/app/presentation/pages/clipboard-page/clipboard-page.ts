import { Component } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-clipboard-page',
  templateUrl: './clipboard-page.html',
  styleUrls: ['./clipboard-page.scss'],
})
export class ClipboardPage {
  textToCopy: string = 'Add some text to copy to clipboard';
  pastedText: string = '';

  constructor(
    private clipboard: Clipboard
  ) {}

  async copyText() {
    await Clipboard.write({
      string: this.textToCopy
    });
  }

  async pasteText() {
    const { type, value } = await Clipboard.read();
    this.pastedText = value;
  }
}
