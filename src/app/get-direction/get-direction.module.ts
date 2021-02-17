import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDirectionPageRoutingModule } from './get-direction-routing.module';

import { GetDirectionPage } from './get-direction.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GetDirectionPageRoutingModule
  ],
  declarations: [GetDirectionPage],
  providers: [ Geolocation ]
})
export class GetDirectionPageModule {}
