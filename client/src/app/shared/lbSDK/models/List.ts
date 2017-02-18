/* tslint:disable */

declare var Object: any;
export interface ListInterface {
  name: string;
  description?: string;
  created: Date;
  slug: string;
  id?: number;
}

export class List implements ListInterface {
  name: string = 'New list';
  description: string = '';
  created: Date = new Date(0);
  slug: string = '';
  id: number = 0;
  constructor(data?: ListInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `List`.
   */
  public static getModelName() {
    return "List";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of List for dynamic purposes.
  **/
  public static factory(data: ListInterface): List{
    return new List(data);
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
      name: 'List',
      plural: 'Lists',
      properties: {
        name: {
          name: 'name',
          type: 'string',
          default: 'New list'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        slug: {
          name: 'slug',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
