import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public/public.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CanActivateViaAuthGuard } from './auth.guard';
import { CanActivateViaVerifiedEmailGuard } from './verified-email.guard';

// TODO put public routes under /pub path and PubComponent template

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [
    CanActivateViaAuthGuard,
    CanActivateViaVerifiedEmailGuard,
  ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
})

export class AppRoutingModule {}
