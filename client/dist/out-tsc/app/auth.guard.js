var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GamerApi, LoggerService } from './shared/sdk/services';
import { RedirectService } from './redirect.service';
var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(usrApi, router, redirect, con) {
        this.usrApi = usrApi;
        this.router = router;
        this.redirect = redirect;
        this.con = con;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    CanActivateViaAuthGuard.prototype.checkLogin = function (url) {
        this.log('Attmpting to access ' + url);
        if (url === '/auth') {
            if (!this.usrApi.isAuthenticated()) {
                this.log('Unauthenticated user, please log in');
                return true;
            }
            this.log('User already authenticated, redirecting to dashboard');
            this.router.navigate(['/dashboard']);
            return false;
        }
        if (this.usrApi.isAuthenticated()) {
            this.log('Authenticated user, continue');
            return true;
        }
        this.log('Unauthenticated user, redirecting to log in');
        this.redirect.set(url);
        this.router.navigate(['/auth']);
        return false;
    };
    CanActivateViaAuthGuard.prototype.log = function (msg) {
        this.con.log('AuthGuard: ' + msg);
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [GamerApi,
        Router,
        RedirectService,
        LoggerService])
], CanActivateViaAuthGuard);
export { CanActivateViaAuthGuard };
//# sourceMappingURL=../../../src/app/auth.guard.js.map