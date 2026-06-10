import { Component } from '@angular/core';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { UtilsService } from 'src/app/shared/utils/utils-service';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.html',
  styleUrls: ['./files-page.scss'],
})
export class FilesPage {

  fileName: string = 'demo.txt';
  fileContent: string = '';
  readContent: string = '';

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private ui: UtilsService
  ) {}

  async downloadFile() {
    try {

      const path = this.file.dataDirectory + this.fileName;

      console.log('Descargando en:', path);

      console.log('Descarga completada');

    } catch (error) {
      console.error('Error descarga:', error);
    }
  }

  async readFile() {
    try {

      const path = this.file.dataDirectory;

      const content = await this.file.readAsText(path, this.fileName);

      this.readContent = content;

      this.ui.showInfoAlert({
        title: 'Files',
        content: 'File loaded'
      })

    } catch (error) {
      console.error('Error leyendo archivo:', error);
    }
  }

  async listFiles() {
    try {

      const files = await this.file.listDir(this.file.dataDirectory, '');

    } catch (error) {
      console.error('Error listando archivos:', error);
    }
  }

}
