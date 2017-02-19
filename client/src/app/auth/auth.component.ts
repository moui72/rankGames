import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { GamerApi, LoggerService, Gamer, AccessToken } from '../shared/sdk';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  currentTab = 0;
  usr = new Gamer();
  rememberMe = true;

  constructor(
    private snackbar: MdSnackBar,
    private usrApi: GamerApi,
    private con: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * creates user account
   */
  signup(): void {
      this.usrApi.create(this.usr)
      .subscribe((u: Gamer) => this.signin(),
        (error) => this.errors(error));
  }

  /**
   * logs user in
   */
  signin(): void {
      this.usrApi.login(this.usr, null, this.rememberMe)
      .subscribe((token: AccessToken) => {
        this.router.navigateByUrl('dash');
      }, (error) => this.errors(error));
  }

  /**
   * Notifies user of errors
   * @param {any} error the error to handle
   */
  private errors(error: any): void {
    this.con.log(error);
    if (error.statusCode === 400 || error.statusCode === 422) {
      this.notify('Sorry but you didn\'t fill in a required field.' +
      ' Try again?');
    } else if (error.statusCode === 401) {
      this.notify('Sorry that email/password combination' +
      ' didn\'t work. Try again?');
    } else {
      this.notify('Something went wrong...');
    }
  }

  /**
   * outputs a message via snackbar (toast)
   * @param {string} msg the message to output
   */
  notify(msg: string): void {
    const sbRef = this.snackbar.open(msg);
  }

  /**
   * changes the current tab
   * @param {number} n which tab to active
   */
  setCurrentTab(n: number): void {
    this.currentTab = n;
  }

}
