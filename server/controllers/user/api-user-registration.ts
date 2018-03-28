import {controller, httpPut} from 'inversify-express-utils';
import { Request } from 'express';
import {User} from '../../../definitions/user/user';
import {inject} from 'inversify';
import TYPES from '../../service/user/types';
import {ServiceUserRegistration} from '../../service/user/service-user-registration';
import {IUser} from '../../../definitions/user/iuser';

@controller('/api/user')
export class ApiUserRegistration {
  constructor(@inject(TYPES.ServiceUserRegistration) private userRegistrationService: ServiceUserRegistration) {}

  @httpPut('/')
  public newUser(request: Request) {
    const result = this.userRegistrationService.newUser(request.body);
    return result;
  }
}
