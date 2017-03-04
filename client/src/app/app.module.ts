import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SDKBrowserModule } from './shared/sdk/index';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RedirectService } from './redirect.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    DashboardModule,
    BrowserModule,
    MaterialModule,
    PublicModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
