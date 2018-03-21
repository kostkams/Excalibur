import {IServiceLocator} from "./IServiceLocator";
import {Container} from "inversify";


export class ServiceLocator implements IServiceLocator {
    container: Container;
    private static instance: ServiceLocator;


    private constructor() {
        this.container = new Container();
    }

    static getInstance(): IServiceLocator {
        if (!ServiceLocator.instance) {
            ServiceLocator.instance = new ServiceLocator();
        }

        return ServiceLocator.instance;
    }
}