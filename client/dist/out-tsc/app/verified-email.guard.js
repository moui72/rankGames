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
import { Observable } from 'rxjs/Observable';
var CanActivateViaVerifiedEmailGuard = (function () {
    function CanActivateViaVerifiedEmailGuard(usrApi, router, redirect, con) {
        this.usrApi = usrApi;
        this.router = router;
        this.redirect = redirect;
        this.con = con;
    }
    CanActivateViaVerifiedEmailGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return new Observable(function (obs) {
            _this.checkEmail().subscribe(function (verified) {
                if (state.url === '/verify') {
                    if (verified) {
                        _this.log('email verified, go to dash');
                        _this.router.navigate(['/dashboard']);
                        obs.next(!verified);
                    }
                    else {
                        _this.log('email not verified, continue');
                        obs.next(!verified);
                    }
                }
                else {
                    if (verified) {
                        _this.log('email verified, continue');
                        obs.next(verified);
                    }
                    else {
                        _this.log('email not verified, go to verify');
                        _this.router.navigate(['/verify']);
                        obs.next(verified);
                    }
                }
            }, function (error) {
                _this.log(error + ', destroy cached credentials and go to auth');
                _this.usrApi.logout().subscribe(function (res) {
                    _this.log(res);
                    _this.router.navigate(['/auth']);
                    obs.next(false);
                });
            });
        });
    };
    CanActivateViaVerifiedEmailGuard.prototype.checkEmail = function () {
        var _this = this;
        return new Observable(function (obs) {
            _this.usrApi.getCurrent().subscribe(function (usr) {
                _this.log('user = ' + JSON.stringify(usr));
                if (usr.emailVerified === true) {
                    return obs.next(true);
                }
                else {
                    return obs.next(false);
                }
            }, function (error) {
                _this.con.error(error);
                return obs.error('no current user');
            });
        });
    };
    CanActivateViaVerifiedEmailGuard.prototype.log = function (msg) {
        this.con.log('VerifiedEmailGuard: ' + msg);
    };
    return CanActivateViaVerifiedEmailGuard;
}());
CanActivateViaVerifiedEmailGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [GamerApi,
        Router,
        RedirectService,
        LoggerService])
], CanActivateViaVerifiedEmailGuard);
export { CanActivateViaVerifiedEmailGuard };
//# sourceMappingURL=../../../src/app/verified-email.guard.js.map