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
import { GamerApi, LibraryApi, LoggerService, } from '../../shared/sdk/';
var LibrariesComponent = (function () {
    function LibrariesComponent(library, usrApi, con) {
        this.library = library;
        this.usrApi = usrApi;
        this.con = con;
    }
    LibrariesComponent.prototype.ngOnInit = function () {
        this.getLibs();
    };
    LibrariesComponent.prototype.getLibs = function () {
        var _this = this;
        this.usrApi.getCurrent().subscribe(function (usr) {
            _this.usrApi.getLibraries(usr.id).subscribe(function (libs) {
                _this.libs = libs;
            }, function (findError) {
                _this.log('couldn\'t find libraries.');
                _this.con.error(findError);
            });
        }, function (getUserError) {
            _this.log('couldn\'t get current user.');
            _this.con.error(getUserError);
        });
    };
    LibrariesComponent.prototype.count = function () {
        if (!this.libs) {
            return 0;
        }
        return this.libs.length;
    };
    LibrariesComponent.prototype.log = function (msg) {
        this.con.log('LibrariesComponent: ' + msg);
    };
    LibrariesComponent.prototype.create = function () {
    };
    return LibrariesComponent;
}());
LibrariesComponent = __decorate([
    Component({
        selector: 'rg-libs',
        templateUrl: './libraries.component.html',
        styleUrls: ['./libraries.component.scss']
    }),
    __metadata("design:paramtypes", [LibraryApi,
        GamerApi,
        LoggerService])
], LibrariesComponent);
export { LibrariesComponent };
//# sourceMappingURL=../../../../../src/app/dashboard/libraries/libraries.component.js.map