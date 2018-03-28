import {IUser} from '../../../definitions/user/iuser';
import {inject, injectable} from 'inversify';
import {DatabaseManager} from '../../database/database-manager';
import DB_TYPES from '../../database/types';
import TYPES from './types';
import {ServiceLocator} from '../../service-locator/service-locator';
import {ExcaliburContainerRegister} from '../../decorators/excalibur-container-register';

@injectable()
export class ServiceUserRegistration {

  constructor(@inject(DB_TYPES.DatabaseManager) private databaseManager: DatabaseManager) {}

  public async newUser(user: IUser) {
    const result = await this.databaseManager.createUser(user);
    return result.data;
  }

  @ExcaliburContainerRegister()
  private register() {
    ServiceLocator.Instance.Container.bind<ServiceUserRegistration>(TYPES.ServiceUserRegistration).to(ServiceUserRegistration);
  }
}
