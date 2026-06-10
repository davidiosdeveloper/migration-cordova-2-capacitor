import { ClipboardPage } from './clipboard-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { ClipboardPageRoutingModule } from './clipboard-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ClipboardPageRoutingModule
  ],
  declarations: [ClipboardPage],
  providers: [
    Clipboard,
    AppHeaderComponent
  ]
})
export class ClipboardPageModule {}
