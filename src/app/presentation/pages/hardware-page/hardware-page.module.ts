import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HardwarePage } from './hardware-page';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { SharedModule } from 'src/app/shared/shared-module';

import { HardwarePageRoutingModule } from './hardware-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HardwarePageRoutingModule
  ],
  declarations: [HardwarePage],
  providers: [
    Diagnostic,
    Geolocation,
    Camera,
    LocationAccuracy,
    Network,
    AppHeaderComponent
  ]
})
export class HardwarePageModule {}
