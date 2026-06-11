import { AppVersionPage } from './app-version-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { AppVersionPageRoutingModule } from './app-version-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    AppVersionPageRoutingModule
  ],
  declarations: [AppVersionPage],
  providers: [
    AppHeaderComponent
  ]
})
export class AppVersionPageModule {}
