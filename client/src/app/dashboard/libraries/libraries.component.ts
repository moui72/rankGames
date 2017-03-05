import { Component, OnInit } from '@angular/core';
import {
  GamerApi,
  LibraryApi,
  Library,
  ListApi,
  GameApi,
  LoggerService,
} from '../../shared/sdk/';

@Component({
  selector: 'rg-libs',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  libs: any[];

  constructor(
    private library: LibraryApi,
    private usrApi: GamerApi,
    private con: LoggerService,
  ) { }

  ngOnInit() {
    this.getLibs();
  }

  getLibs() {
    this.usrApi.getCurrent().subscribe(usr => {
      this.usrApi.getLibraries(usr.id).subscribe(libs => {
        this.libs = libs;
      }, findError => {
        this.log('couldn\'t find libraries.');
        this.con.error(findError);
      });
    }, getUserError => {
      this.log('couldn\'t get current user.');
      this.con.error(getUserError);
    });
  }

  count() {
    if (!this.libs) {
      return 0;
    }
    return this.libs.length;
  }

  log(msg) {
    this.con.log('LibrariesComponent: ' + msg);
  }

  create(){
    // TODO create library dialogue
  }

}
