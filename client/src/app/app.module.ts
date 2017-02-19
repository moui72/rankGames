import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';
import { ImportModule } from './import/import.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    ImportModule,
    MaterialModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
