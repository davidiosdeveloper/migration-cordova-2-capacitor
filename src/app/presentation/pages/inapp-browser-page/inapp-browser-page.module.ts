import { InappBrowserPage } from './inapp-browser-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';
import { InAppBrowserPageRoutingModule } from './inapp-browser-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    InAppBrowserPageRoutingModule
  ],
  declarations: [InappBrowserPage],
  providers: [
    AppHeaderComponent
  ]
})
export class InnAppBrowserPageModule {}
