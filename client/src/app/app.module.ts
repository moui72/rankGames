import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { RedirectService } from './redirect.service';
import { ImportModule } from './import/import.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifiedComponent } from './verified/verified.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VerifyEmailComponent,
    VerifiedComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    ImportModule,
    MaterialModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
