import { FirebasePage } from './firebase-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared-module';
import { AppHeaderComponent } from 'src/app/shared/app-header/app-header.component';
import { FirebasePageRoutingModule } from './firebase-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FirebasePageRoutingModule
  ],
  declarations: [FirebasePage],
  providers: [
    AppHeaderComponent
  ]
})
export class FirebasePageModule {}
