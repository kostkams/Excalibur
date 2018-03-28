import {User} from '../../definitions/user/user';
import NodeCouchDb from 'node-couchdb';
const NodeCouchDb = require('node-couchdb');
import {ServiceLocator} from '../service-locator/service-locator';
import TYPES from './types';
import {ExcaliburContainerRegister} from '../decorators/excalibur-container-register';
import {injectable} from 'inversify';

@injectable()
export class DatabaseManager {
  private couch: NodeCouchDb;

  constructor() {
   this.couch = new NodeCouchDb({
      auth: {
        user: 'admin',
        pass: 'nD$Z#xx:RK&n#SC5'
      }
   });
  }

  public createDatabase(dbName: string) {
    this.couch.createDatabase(dbName);
  }

  public async databaseExists(dbName: string) {
  }

  public deleteDatabasee(dbName: string) {
  }

  public async createUser(user: User) {
    user.id = `org.couchdb.user:${user.username}`;

    const dbUser = {
      _id: user.id,
      name: user.username,
      email: user.email,
      pass: user.hashedPassword,
      type: 'user',
      roles: [],
    };

    return this.couch.insert(`_users/`, dbUser);
  }

  public deleteUser(user: User) {
  }

  @ExcaliburContainerRegister()
  private register() {
    ServiceLocator.Instance.Container.bind<DatabaseManager>(TYPES.DatabaseManager).to(DatabaseManager);
  }
}
