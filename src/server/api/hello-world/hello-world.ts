import {controller, httpGet} from 'inversify-express-utils'

@controller('/')
export class HelloWorld {
    @httpGet('/')
    public get(): string {
        return 'Hello World';
    }
}