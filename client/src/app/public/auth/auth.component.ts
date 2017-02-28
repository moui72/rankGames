import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { GamerApi, LoggerService, Gamer, AccessToken } from '../../shared/sdk';
import { RedirectService } from '../../redirect.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currentTab = 0;
  usr = {email: '', password: '', };
  rememberMe = true;

  constructor(
    private snackbar: MdSnackBar,
    private usrApi: GamerApi,
    private con: LoggerService,
    private router: Router,
    private redirect: RedirectService,
  ) { }

  ngOnInit() {
    this.con.log('auth init');
  }

  /**
   * creates user account
   */
  signup(): void {
    this.usrApi.create(this.usr)
    .subscribe((u: Gamer) => {
      this.usrApi.login(this.usr, null, true).subscribe(token => {
        this.router.navigate(['/verify']);
      }, error => this.errors(error));
    }, error => this.errors(error));
  }

  /**
   * logs user in and redirects to requested URL
   * or redirects to dashboard if no requested URL
   */
  signin(): void {
    this.usrApi.login(this.usr, null, this.rememberMe)
    .subscribe((token: AccessToken) => {
      let url = 'dashboard';
      if (this.redirect.pending()) {
        url = this.redirect.consume();
      }
      this.router.navigateByUrl(url);
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
    const sbRef = this.snackbar.open(msg, '', {duration: 5 * 1000});
  }

  /**
   * changes the current tab
   * @param {number} n which tab to active
   */
  setCurrentTab(n: number): void {
    this.currentTab = n;
  }

  forgotPassword() {}

}
