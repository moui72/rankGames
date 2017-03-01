import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SDKBrowserModule } from './shared/sdk/index';

import { AuthModule } from './public/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { PrivateRoutingModule } from './dashboard/private-routing.module';

import { AppComponent } from './app.component';
import { RedirectService } from './redirect.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './public/verify-email/verify-email.component';
import { VerifiedComponent } from './public/verified/verified.component';
import { PublicComponent } from './public/public.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { MainDashComponent } from './dashboard/main-dash/main-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VerifyEmailComponent,
    VerifiedComponent,
    PublicComponent,
    PageNotFoundComponent,
    MainDashComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    PublicRoutingModule,
    PrivateRoutingModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
