import { FilesPage } from './files-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';
import { FilesPageRoutingModule } from './files-page.routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FilesPageRoutingModule
  ],
  declarations: [FilesPage],
  providers: [
    File,
    FileOpener,
    AppHeaderComponent
  ]
})
export class FilesPageModule {}
