import { CrudMethods } from "./crud.interface";
import { RequestHandlers } from "./handlers.interface";

export interface ModelInterface<T> extends CrudMethods<T> {}
export interface ServiceInterface<T> extends CrudMethods<T> {}
export interface ControllerInterface extends RequestHandlers {}