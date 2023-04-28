import { TaskModel } from "../models/TaskModel";
import { TaskInterface } from "../interfaces/entities.interface";
import { ServiceInterface } from "../interfaces/layers.interface";

export class TaskService implements ServiceInterface<TaskInterface> {
  constructor(private _model = new TaskModel()) {}

  public create = async (obj: TaskInterface): Promise<TaskInterface | null> => {
    return null
  }
  public readAll = async (): Promise<TaskInterface[]> => {
    console.log('model');

    return []
  }  
  public readOne = async (id: string): Promise<TaskInterface | null> => {
    return null
  }
  public update = async (id: string, obj: Partial<TaskInterface>): Promise<TaskInterface | null> => {
    return null
  }
  public delete = async (id: string): Promise<TaskInterface | null> => {
    return null
  } 
}
