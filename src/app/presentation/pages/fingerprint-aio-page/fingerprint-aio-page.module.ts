import { FingerprintAioPage } from './fingerprint-aio-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

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
    AppHeaderComponent
  ]
})
export class FingerprintAioPageModule {}
