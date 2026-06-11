import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HardwarePage } from './hardware-page';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { SharedModule } from 'src/app/shared/shared-module';

import { HardwarePageRoutingModule } from './hardware-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    HardwarePageRoutingModule
  ],
  declarations: [HardwarePage],
  providers: [
    AppHeaderComponent
  ]
})
export class HardwarePageModule {}
