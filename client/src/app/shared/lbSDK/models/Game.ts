/* tslint:disable */
import {
  Gamer
} from '../index';

declare var Object: any;
export interface GameInterface {
  name: string;
  gameId: number;
  id?: number;
  owners?: Gamer[];
}

export class Game implements GameInterface {
  name: string = '';
  gameId: number = 0;
  id: number = 0;
  owners: Gamer[] = null;
  constructor(data?: GameInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Game`.
   */
  public static getModelName() {
    return "Game";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Game for dynamic purposes.
  **/
  public static factory(data: GameInterface): Game{
    return new Game(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Game',
      plural: 'Games',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        gameId: {
          name: 'gameId',
          type: 'number'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        owners: {
          name: 'owners',
          type: 'Gamer[]',
          model: 'Gamer'
        },
      }
    }
  }
}
