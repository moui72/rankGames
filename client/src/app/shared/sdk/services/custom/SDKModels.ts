/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Email } from '../../models/Email';
import { Gamer } from '../../models/Gamer';
import { Library } from '../../models/Library';
import { List } from '../../models/List';
import { Game } from '../../models/Game';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Email: Email,
    Gamer: Gamer,
    Library: Library,
    List: List,
    Game: Game,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
