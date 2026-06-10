import { FingerprintAioPage } from './fingerprint-aio-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { FingerprintAioPageRoutingModule } from './fingerprint-aio-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FingerprintAioPageRoutingModule
  ],
  declarations: [FingerprintAioPage],
  providers: [
    FingerprintAIO,
    AppHeaderComponent
  ]
})
export class FingerprintAioPageModule {}
