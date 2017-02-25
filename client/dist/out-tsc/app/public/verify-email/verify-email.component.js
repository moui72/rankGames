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
import { GamerApi, LoggerService } from '../../shared/sdk';
var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(usrApi, con) {
        this.usrApi = usrApi;
        this.con = con;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usrApi.logout().subscribe(function (r) {
            _this.log('logged out');
            _this.log(r);
        }, function (e) {
            _this.log('log out attempted');
            _this.con.error(e);
        });
    };
    VerifyEmailComponent.prototype.log = function (msg) {
        this.con.log('VerifyComponent: ' + msg);
    };
    return VerifyEmailComponent;
}());
VerifyEmailComponent = __decorate([
    Component({
        selector: 'app-verify-email',
        templateUrl: './verify-email.component.html',
        styleUrls: ['./verify-email.component.scss']
    }),
    __metadata("design:paramtypes", [GamerApi, LoggerService])
], VerifyEmailComponent);
export { VerifyEmailComponent };
//# sourceMappingURL=../../../../../src/app/public/verify-email/verify-email.component.js.map