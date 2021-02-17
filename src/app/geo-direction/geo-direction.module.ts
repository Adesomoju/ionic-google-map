import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoDirectionPageRoutingModule } from './geo-direction-routing.module';

import { GeoDirectionPage } from './geo-direction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GeoDirectionPageRoutingModule
  ],
  declarations: [GeoDirectionPage]
})
export class GeoDirectionPageModule {}
