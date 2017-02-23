import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamerApi, Gamer, LoggerService } from './shared/sdk/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Top Games';

  constructor(
    private usrApi: GamerApi,
    private con: LoggerService,
    private router: Router,
  ) {}

  ngOnInit() {

  }

  log(msg: string) {
    this.con.log('AppInit: ' + msg);
  }
}
