import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SDKBrowserModule } from './shared/sdk/index';

import { AuthModule } from './auth/auth.module';
import { ImportModule } from './import/import.module';
import { AppRoutingModule } from './app-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';

import { AppComponent } from './app.component';
import { RedirectService } from './redirect.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifiedComponent } from './verified/verified.component';
import { PublicComponent } from './public/public.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VerifyEmailComponent,
    VerifiedComponent,
    PublicComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    ImportModule,
    MaterialModule,
    AppRoutingModule,
    PublicRoutingModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
