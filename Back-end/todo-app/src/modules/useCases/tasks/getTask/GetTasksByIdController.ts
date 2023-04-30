import { Request, Response } from 'express'
import { GetAllTasks } from './GetTasksById'

export class GetAllTasksController {
  handle = async (req: Request, res: Response) => {
    const createTask = new GetAllTasks()

    const { userId } = req.body

    const result = await createTask.readAll(userId)

    return res.status(200).json(result)
  }
}