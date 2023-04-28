import { Request, Response } from "express";
import { ControllerInterface } from "../interfaces/layers.interface";
import { TaskService } from "../services/TaskService";

export class TaskController implements ControllerInterface {
  constructor(protected _service = new TaskService()){}

  public create = async (req: Request, res: Response): Promise<Response | null> => {
    return null
  }
  public readAll = async (req: Request, res: Response): Promise<Response | null> => {
    console.log('model');

    return null
  }  
  public readOne = async (req: Request, res: Response): Promise<Response | null> => {
    return null
  }
  public update = async (req: Request, res: Response): Promise<Response | null> => {
    return null
  }
  public delete = async (req: Request, res: Response): Promise<Response | null> => {
    return null
  }
}