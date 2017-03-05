import { Component, OnInit } from '@angular/core';
import {
  GamerApi,
  LibraryApi,
  Library,
  ListApi,
  GameApi
} from '../../shared/sdk/';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  libs: any[];

  constructor(private library: LibraryApi, private usrApi: GamerApi) { }

  ngOnInit() {
    this.getLibs();
  }

  getLibs() {
    this.usrApi.getCurrent().subscribe(usr => {
      this.library.find({where: {ownerId: usr.id}}).subscribe(libs => {
        this.libs = libs;
      });
    });
  }

  count() {
    return this.libs.length;
  }

}
