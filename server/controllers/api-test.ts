import { controller, httpGet } from 'inversify-express-utils';

@controller('/api')
export class HomeController {
  @httpGet('/test')
  public get(): string {
    return 'Api is working';
  }
}
