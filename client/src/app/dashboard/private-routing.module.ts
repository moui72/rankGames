import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CanActivateViaAuthGuard } from '../auth.guard';
import { CanActivateViaVerifiedEmailGuard } from '../verified-email.guard';
import { MainDashComponent } from './main-dash/main-dash.component';

const privateRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      CanActivateViaAuthGuard,
      CanActivateViaVerifiedEmailGuard,
    ],
    children: [
      {path: '', component: MainDashComponent},
      {path: '**', redirectTo: '/404'},
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  exports: [ RouterModule ],
  providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
})
export class PrivateRoutingModule { }
