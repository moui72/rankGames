import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { GamerApi } from './shared/sdk/services';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private usrApi: GamerApi, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.usrApi.isAuthenticated()) { return true; }

    // TODO Store the attempted URL for redirecting
    // this.usrApi.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/auth']);
    return false;
  }
}
