import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  LoopBackAuth,
  GamerApi,
  LoggerService,
  Gamer,
  AccessToken
} from '../../shared/sdk';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private usrApi: GamerApi,
    private con: LoggerService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  log(msg: string) {
    this.con.log('VerifyComponent: ' + msg);
  }

  resend() {
    this.usrApi.getCurrent().subscribe(usr => {
      const resendUser = {email: usr.email, resend: true};
      this.usrApi.create(resendUser).subscribe(user => {
        const msg = 'Verification E-mail was sent to ' + usr.email + '.';
        this.log(msg);
        this.logout(msg);
      }, error => this.con.error);
    });
  }

  logout(msg?: string) {
    this.usrApi.logout().subscribe(r => {
      this.log('logged out');
      this.log(r);
      this.router.navigate(['/auth']);
    }, e => {
      this.log('log out attempted');
      if (e.statusCode !== 400) {
        this.con.error(e);
      } else {
        // logout failed because there was no current token
        this.log('no current token');
      }
      this.router.navigate(['/auth', msg ? {msg: msg} : null]);
    });
  }

}
