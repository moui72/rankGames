/* tslint:disable */
import {
  Library
} from '../index';

declare var Object: any;
export interface GamerInterface {
  name?: string;
  joined: Date;
  bggUser?: string;
  realm?: string;
  username?: string;
  password: string;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  id?: number;
  accessTokens?: any[];
  libraries?: Library[];
}

export class Gamer implements GamerInterface {
  name: string = 'Gamer';
  joined: Date = new Date(0);
  bggUser: string = '';
  realm: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  emailVerified: boolean = false;
  verificationToken: string = '';
  id: number = 0;
  accessTokens: any[] = null;
  libraries: Library[] = null;
  constructor(data?: GamerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Gamer`.
   */
  public static getModelName() {
    return "Gamer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Gamer for dynamic purposes.
  **/
  public static factory(data: GamerInterface): Gamer{
    return new Gamer(data);
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
      name: 'Gamer',
      plural: 'Gamers',
      properties: {
        name: {
          name: 'name',
          type: 'string',
          default: 'Gamer'
        },
        joined: {
          name: 'joined',
          type: 'Date'
        },
        bggUser: {
          name: 'bggUser',
          type: 'string'
        },
        realm: {
          name: 'realm',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        libraries: {
          name: 'libraries',
          type: 'Library[]',
          model: 'Library'
        },
      }
    }
  }
}
