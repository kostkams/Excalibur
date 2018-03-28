import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as crypto from 'crypto-js';
import {UserRegistrationViewModel} from './dialog/user-registration-dialog.view-model';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../../definitions/user/user';

@Injectable()
export class UserRegistrationService {

  constructor(private http: HttpClient) {}

  public registerUser(user: UserRegistrationViewModel): Observable<User> {
    const userDto = new User(null, user.username, crypto.MD5(user.password).toString(), user.email);
    return this.http.put<User>('/api/user', userDto);
  }
}
