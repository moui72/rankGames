import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './public/auth/auth.component';
import { PublicComponent } from './public/public.component';
import { VerifiedComponent } from './public/verified/verified.component';
import { VerifyEmailComponent } from './public/verify-email/verify-email.component';
import { CanActivateViaAuthGuard } from './auth.guard';
import { CanActivateViaVerifiedEmailGuard } from './verified-email.guard';

// [x] TODO put public routes under /pub path and PubComponent template

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
  providers: [
    CanActivateViaAuthGuard,
    CanActivateViaVerifiedEmailGuard
  ],
})

export class AppRoutingModule {}
