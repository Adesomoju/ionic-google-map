import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkLocationPage } from './mark-location.page';

const routes: Routes = [
  {
    path: '',
    component: MarkLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkLocationPageRoutingModule {}
