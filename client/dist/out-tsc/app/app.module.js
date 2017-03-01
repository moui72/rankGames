var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map