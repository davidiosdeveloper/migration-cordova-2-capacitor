import { StatusBarPage } from './status-bar-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';
import { StatusBarPageRoutingModule } from './status-bar-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FormsModule,
    StatusBarPageRoutingModule
  ],
  declarations: [StatusBarPage],
  providers: [
    AppHeaderComponent
  ]
})
export class StatusBarPageModule {}
