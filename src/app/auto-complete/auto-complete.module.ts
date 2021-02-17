import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoCompletePageRoutingModule } from './auto-complete-routing.module';

import { AutoCompletePage } from './auto-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutoCompletePageRoutingModule
  ],
  declarations: [AutoCompletePage]
})
export class AutoCompletePageModule {}
