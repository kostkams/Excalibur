import { controller, httpGet } from 'inversify-express-utils';
import * as express from 'express'
import * as path from 'path'

@controller('/api')
export class HomeController {
  @httpGet('/z')
  public get(req: express.Request, res: express.Response) :string{
    console.log('test');
    return 'test';
  }
}
