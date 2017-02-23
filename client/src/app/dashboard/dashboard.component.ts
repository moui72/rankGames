import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GamerApi, LoggerService, Gamer, AccessToken } from '../shared/sdk';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private usrApi: GamerApi,
    private con: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  log(msg: string) {
    this.con.log('DashInit: ' + msg);
  }

}
