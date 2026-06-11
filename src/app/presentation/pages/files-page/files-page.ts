import { Component } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils/utils-service';

import {
  Directory,
  Filesystem,
  GetUriResult
} from '@capacitor/filesystem';

import {
  FileTransfer
} from '@capacitor/file-transfer';

import { FileViewer } from "@capacitor/file-viewer";

@Component({
    selector: 'app-files-page',
    templateUrl: './files-page.html',
    styleUrls: ['./files-page.scss'],
    standalone: false
})
export class FilesPage {

  samplePdfUrl: string = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  fileName: string = 'sample.pdf';

  constructor(
    private ui: UtilsService
  ) {}

  async startDownloading() {
    try {
      await this.downloadPdf();
      await this.openFile();
    } catch(error) {
      console.error(error);
      await this.ui.showInfoAlert({
        title: 'Error',
        content: 'No fue posible descargar el archivo'
      });
    }
  }

  async downloadPdf() {
    const target = await Filesystem.getUri({
      directory: Directory.Documents,
      path: this.fileName
    });

    console.log('Destino:', target.uri);

    const result = await FileTransfer.downloadFile({
      url: this.samplePdfUrl,
      path: target.uri,
      progress: true
    });

    console.log(result);
  }

  async openFile() {
    const file = await Filesystem.getUri({
      directory: Directory.Documents,
      path: this.fileName
    });

    await FileViewer.openDocumentFromLocalPath({
      path: file.uri
    });
  }
}
