import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { GamerApi, LoggerService } from './shared/sdk/services';
import { RedirectService } from './redirect.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateViaVerifiedEmailGuard implements CanActivate {

  constructor(
    private usrApi: GamerApi,
    private router: Router,
    private redirect: RedirectService,
    private con: LoggerService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable(obs => {
      this.checkEmail().subscribe(verified => {
        if (state.url === '/verify') {
          if (verified) {
            this.log('email verified, go to dash');
            this.router.navigate(['/dashboard']);
            obs.next(!verified);
          } else {
            this.log('email not verified, continue');
            obs.next(!verified);
          }
        } else {
          if (verified) {
            this.log('email verified, continue');
            obs.next(verified);
          } else {
            this.log('email not verified, go to verify');
            this.router.navigate(['/verify']);
            obs.next(verified);
          }
        }
      }, error => {
        this.log(error + ', destroy cached credentials and go to auth');
        this.usrApi.logout().subscribe(res => {
          this.log(res);
          this.router.navigate(['/auth']);
          obs.next(false);
        });
      });
    });
  }

  checkEmail(): Observable<boolean> {
    return new Observable(obs => {
      this.usrApi.getCurrent().subscribe(usr => {
        this.log('user = ' + JSON.stringify(usr));
        if (usr.emailVerified === true) {
          return obs.next(true);
        } else {
          return obs.next(false);
        }
      }, error => {
        this.con.error(error)
        return obs.error('no current user');
      });
    });

  }

  log(msg: string) {
    this.con.log('VerifiedEmailGuard: ' + msg);
  }
}
