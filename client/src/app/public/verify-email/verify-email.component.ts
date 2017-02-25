import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GamerApi, LoggerService, Gamer, AccessToken } from '../../shared/sdk';

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
    this.usrApi.getCachedCurrent()
      .subscribe(u => this.usrApi.resendVerification(u)
        .subscribe(() => this.logout))

  }

  logout() {
    this.usrApi.logout().subscribe(r => {
      this.log('logged out');
      this.log(r);
      this.router.navigate(['/auth']);
    }, e => {
      this.log('log out attempted');
      this.con.error(e);
      this.router.navigate(['/auth']);
    });
  }

}
