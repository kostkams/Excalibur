import {IUser} from './iuser';

export class User implements IUser {
  public id: string;
  public username: string;
  public hashedPassword: string;
  public email: string;

  constructor(id?: string,
              username?: string,
              hashedPassword?: string,
              email?: string ) {
    this.id = id;
    this.username = username;
    this.hashedPassword = hashedPassword;
    this.email = email;
  }
}
