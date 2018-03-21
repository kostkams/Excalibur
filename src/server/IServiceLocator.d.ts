import {Container} from "inversify";

export interface IServiceLocator{
    readonly container: Container;
}