var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from '../auth.guard';
import { CanActivateViaVerifiedEmailGuard } from '../verified-email.guard';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var publicRoutes = [
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
                ] },
            { path: 'verified', component: VerifiedComponent, },
            { path: '**', component: PageNotFoundComponent, },
        ]
    }
];
var PublicRoutingModule = (function () {
    function PublicRoutingModule() {
    }
    return PublicRoutingModule;
}());
PublicRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(publicRoutes)
        ],
        exports: [RouterModule],
        providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
    })
], PublicRoutingModule);
export { PublicRoutingModule };
//# sourceMappingURL=../../../../src/app/public/public-routing.module.js.map