var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { GamerApi, LoggerService } from '../../shared/sdk';
import { RedirectService } from '../../redirect.service';
var AuthComponent = (function () {
    function AuthComponent(snackbar, usrApi, con, router, redirect) {
        this.snackbar = snackbar;
        this.usrApi = usrApi;
        this.con = con;
        this.router = router;
        this.redirect = redirect;
        this.currentTab = 0;
        this.usr = { email: '', dateOfBirth: Date.now(), password: '', };
        this.rememberMe = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.con.log('auth init');
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.usrApi.create(this.usr)
            .subscribe(function (u) { return _this.router.navigate(['/verify']); }, function (error) { return _this.errors(error); });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.usrApi.login(this.usr, null, this.rememberMe)
            .subscribe(function (token) {
            var url = 'dashboard';
            if (_this.redirect.pending()) {
                url = _this.redirect.consume();
            }
            _this.router.navigateByUrl(url);
        }, function (error) { return _this.errors(error); });
    };
    AuthComponent.prototype.errors = function (error) {
        this.con.log(error);
        if (error.statusCode === 400 || error.statusCode === 422) {
            this.notify('Sorry but you didn\'t fill in a required field.' +
                ' Try again?');
        }
        else if (error.statusCode === 401) {
            this.notify('Sorry that email/password combination' +
                ' didn\'t work. Try again?');
        }
        else {
            this.notify('Something went wrong...');
        }
    };
    AuthComponent.prototype.notify = function (msg) {
        var sbRef = this.snackbar.open(msg);
    };
    AuthComponent.prototype.setCurrentTab = function (n) {
        this.currentTab = n;
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.scss']
    }),
    __metadata("design:paramtypes", [MdSnackBar,
        GamerApi,
        LoggerService,
        Router,
        RedirectService])
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=../../../../../src/app/public/auth/auth.component.js.map