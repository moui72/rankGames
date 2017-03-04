var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RedirectService } from '../redirect.service';
import { PublicRoutingModule } from './public-routing.module';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
var PublicModule = (function () {
    function PublicModule() {
    }
    return PublicModule;
}());
PublicModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MaterialModule,
            PublicRoutingModule,
        ],
        providers: [RedirectService],
        declarations: [
            AuthComponent,
            PageNotFoundComponent,
            PublicComponent,
            VerifiedComponent,
            VerifyEmailComponent,
        ],
    })
], PublicModule);
export { PublicModule };
//# sourceMappingURL=../../../../src/app/public/public.module.js.map