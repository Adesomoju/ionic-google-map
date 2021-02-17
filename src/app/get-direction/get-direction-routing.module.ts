import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDirectionPage } from './get-direction.page';

const routes: Routes = [
  {
    path: '',
    component: GetDirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDirectionPageRoutingModule {}
