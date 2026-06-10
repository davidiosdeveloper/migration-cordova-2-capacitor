import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwarePage } from './hardware-page';

const routes: Routes = [
  {
    path: '',
    component: HardwarePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwarePageRoutingModule {}
