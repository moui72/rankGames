import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { GamerApi, LoggerService } from './shared/sdk/services';
import { RedirectService } from './redirect.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(
    private usrApi: GamerApi,
    private router: Router,
    private redirect: RedirectService,
    private con: LoggerService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (url === '/auth') {
      if (!this.usrApi.isAuthenticated()) {
        this.log('Unauthenticated user, continue');
        return true;
      }
      this.log('Authenticated user, redirect to dashboard');
      this.router.navigate(['/dashboard']);
      return false;
    }
    if (this.usrApi.isAuthenticated()) {
      this.log('Authenticated user, continue');
      return true;
    }

    this.log('Unauthenticated user, please log in');

    // Store the attempted URL for redirecting
    this.redirect.set(url);

    // Navigate to the login page
    this.router.navigate(['/auth']);
    return false;
  }

  log(msg: string) {
    this.con.log('AuthGuard: ' + msg);
  }
}
