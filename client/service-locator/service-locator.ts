import {Container} from 'inversify';

export class ServiceLocator {
  private static instance: ServiceLocator;
  private container: Container;

  private constructor() {
    this.container = new Container();
  }

  public static getInstance(): ServiceLocator {
    if (this.instance == null) {
      this.instance = new ServiceLocator();
    }
    return this.instance;
  }

  public getContainer(): Container {
    return this.container;
  }
}
