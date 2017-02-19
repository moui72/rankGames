import { Component, OnInit } from '@angular/core';
import { GamerApi } from '../shared/lbSDK';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private gamerApi: GamerApi) { }

  ngOnInit() {
  }

}
