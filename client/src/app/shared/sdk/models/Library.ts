/* tslint:disable */
import {
  Gamer
} from '../index';

declare var Object: any;
export interface LibraryInterface {
  name?: string;
  id?: number;
  ownerId?: number;
  owner?: Gamer;
}

export class Library implements LibraryInterface {
  name: string = 'New library';
  id: number = 0;
  ownerId: number = 0;
  owner: Gamer = null;
  constructor(data?: LibraryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Library`.
   */
  public static getModelName() {
    return "Library";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Library for dynamic purposes.
  **/
  public static factory(data: LibraryInterface): Library{
    return new Library(data);
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
      name: 'Library',
      plural: 'Libraries',
      properties: {
        name: {
          name: 'name',
          type: 'string',
          default: 'New library'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        ownerId: {
          name: 'ownerId',
          type: 'number'
        },
      },
      relations: {
        owner: {
          name: 'owner',
          type: 'Gamer',
          model: 'Gamer'
        },
      }
    }
  }
}
