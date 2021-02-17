import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoDirectionPage } from './geo-direction.page';

const routes: Routes = [
  {
    path: '',
    component: GeoDirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoDirectionPageRoutingModule {}
