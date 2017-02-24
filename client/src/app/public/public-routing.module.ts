import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from '../auth/auth.component';
import { PublicComponent } from './public.component';
import { VerifiedComponent } from '../verified/verified.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { CanActivateViaAuthGuard } from '../auth.guard';
import { CanActivateViaVerifiedEmailGuard } from '../verified-email.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'auth',
        component: AuthComponent,
        canActivate: [
          CanActivateViaAuthGuard,
        ],
      },
      { path: 'verify', component: VerifyEmailComponent, canActivate: [
        CanActivateViaAuthGuard,
        CanActivateViaVerifiedEmailGuard,
      ]},
      { path: 'verified', component: VerifiedComponent, },
      { path: '**', component: PageNotFoundComponent, },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [ RouterModule ],
  providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
})
export class PublicRoutingModule { }



export class CrisisCenterRoutingModule { }
