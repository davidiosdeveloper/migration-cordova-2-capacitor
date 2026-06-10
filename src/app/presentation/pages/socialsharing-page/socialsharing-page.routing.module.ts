import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialsharingPage } from './socialsharing-page';

const routes: Routes = [
  {
    path: '',
    component: SocialsharingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialSharingPageRoutingModule {}
