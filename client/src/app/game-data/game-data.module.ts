import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GamerApi,
  LibraryApi,
  ListApi,
  GameApi
} from '../shared/sdk/services/custom/';
import { GameDataComponent } from './game-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameDataComponent,
  ]
})
export class GameDataModule { }
