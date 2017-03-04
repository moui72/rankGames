var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CanActivateViaAuthGuard } from '../auth.guard';
import { CanActivateViaVerifiedEmailGuard } from '../verified-email.guard';
import { MainDashComponent } from './main-dash/main-dash.component';
var privateRoutes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [
            CanActivateViaAuthGuard,
            CanActivateViaVerifiedEmailGuard,
        ],
        children: [
            { path: '', component: MainDashComponent },
            { path: '**', redirectTo: '/404' },
        ]
    }
];
var PrivateRoutingModule = (function () {
    function PrivateRoutingModule() {
    }
    return PrivateRoutingModule;
}());
PrivateRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(privateRoutes)
        ],
        exports: [RouterModule],
        providers: [CanActivateViaAuthGuard, CanActivateViaVerifiedEmailGuard],
    })
], PrivateRoutingModule);
export { PrivateRoutingModule };
//# sourceMappingURL=../../../../src/app/dashboard/private-routing.module.js.map