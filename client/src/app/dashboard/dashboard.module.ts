import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { LibrariesComponent } from './libraries/libraries.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MaterialModule,
  ],
  declarations: [
    DashboardComponent,
    MainDashComponent,
    LibrariesComponent,
  ]
})
export class DashboardModule { }
