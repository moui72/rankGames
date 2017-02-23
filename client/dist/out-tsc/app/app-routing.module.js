var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CanActivateViaAuthGuard } from './auth.guard';
import { CanActivateViaVerifiedEmailGuard } from './verified-email.guard';
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [
            CanActivateViaAuthGuard,
            CanActivateViaVerifiedEmailGuard,
        ] },
    { path: 'auth', component: AuthComponent, canActivate: [
            CanActivateViaAuthGuard,
        ] },
    { path: 'verify', component: VerifyEmailComponent, canActivate: [
            CanActivateViaAuthGuard,
            CanActivateViaVerifiedEmailGuard,
        ] },
    { path: 'verified', component: VerifiedComponent, },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=../../../src/app/app-routing.module.js.map