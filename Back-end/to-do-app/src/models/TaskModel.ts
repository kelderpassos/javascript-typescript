import { PrismaClient } from '@prisma/client'
import { ModelInterface } from "../interfaces/layers.interface";

export class TaskModel implements ModelInterface<TaskModel> {
  protected _model;

  constructor() {
    this._model = new PrismaClient();
  }

  public create = async (obj: TaskModel): Promise<TaskModel | null> => {
    return null
  }
  public readAll = async (): Promise<TaskModel[]> => {
    console.log('model');
    
    return []
  }  
  public readOne = async (id: string): Promise<TaskModel | null> => {
    return null
  }
  public update = async (id: string, obj: Partial<TaskModel>): Promise<TaskModel | null> => {
    return null
  }
  public delete = async (id: string): Promise<TaskModel | null> => {
    return null
  }
}