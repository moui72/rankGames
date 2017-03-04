import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { RedirectService } from '../redirect.service';
import { PublicRoutingModule } from './public-routing.module'

import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PublicRoutingModule,
  ],
  providers: [ RedirectService ],
  declarations: [
    AuthComponent,
    PageNotFoundComponent,
    PublicComponent,
    VerifiedComponent,
    VerifyEmailComponent,
  ],
})
export class PublicModule { }
