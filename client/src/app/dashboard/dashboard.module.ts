import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainDashComponent } from './main-dash/main-dash.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MaterialModule,
  ],
  declarations: [
    DashboardComponent,
    MainDashComponent
  ]
})
export class DashboardModule { }
