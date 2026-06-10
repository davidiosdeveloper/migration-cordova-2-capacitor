import { SocialsharingPage } from './socialsharing-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';

import { SocialSharingPageRoutingModule } from './socialsharing-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SocialSharingPageRoutingModule
  ],
  declarations: [SocialsharingPage],
  providers: [
    SocialSharing,
    AppHeaderComponent
  ]
})
export class SocialSharingPageModule {}
