import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { CabinetComponent } from './cabinet.component';
import { CabinetHeaderComponent } from '../shared/cabinet-header/cabinet-header.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

import { SharedModule } from '../shared/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    CabinetComponent,
    CabinetHeaderComponent,
    SuggestionsComponent,
    DashboardComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CabinetComponent,
    CabinetHeaderComponent,
  ]
})
export class CabinetModule { }
