var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainDashComponent } from './main-dash/main-dash.component';
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            PrivateRoutingModule,
            MaterialModule,
        ],
        declarations: [
            DashboardComponent,
            MainDashComponent
        ]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=../../../../src/app/dashboard/dashboard.module.js.map