import {Container} from "inversify";

export class ServiceLocator {
  private static instance: ServiceLocator;
  private readonly container: Container;

  private constructor() {
    this.container = new Container();
  }

  public static GetInstance(): ServiceLocator {
    if (!this.instance) {
      this.instance = new ServiceLocator();
    }
    return this.instance;
  }

  public GetContainer(): Container {
    return this.container;
  }
}
