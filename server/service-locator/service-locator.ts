import {Container} from "inversify";

export class ServiceLocator {
  private static instance: ServiceLocator;
  private readonly container: Container;

  private constructor() {
    this.container = new Container();
  }

  public static get Instance(): ServiceLocator {
    if (!this.instance) {
      this.instance = new ServiceLocator();
    }
    return this.instance;
  }

  public get Container(): Container {
    return this.container;
  }
}
