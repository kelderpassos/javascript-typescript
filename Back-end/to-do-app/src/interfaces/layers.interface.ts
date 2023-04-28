import { CrudMethods } from "./crud.interface";
import { RequestHandlers } from "./handlers.interface";

export interface Model<T> extends CrudMethods<T> {}
export interface Service<T> extends CrudMethods<T> {}
export interface Controller<T> extends RequestHandlers {}