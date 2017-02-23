import { Component, OnInit } from '@angular/core';

import { GamerApi, LoggerService, Gamer, AccessToken } from '../shared/sdk';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private usrApi: GamerApi, private con: LoggerService) { }

  ngOnInit() {
    this.usrApi.logout().subscribe(r => {
      this.log('logged out');
      this.log(r);
    }, e => {
      this.log('log out attempted');
      this.con.error(e);
    });
  }

  log(msg: string) {
    this.con.log('VerifyComponent: ' + msg);
  }

}
