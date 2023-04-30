import { Request, Response } from 'express'
import { CreateTask } from './CreateTask'
import { TaskDTO } from '@/modules/dtos/task'

export class CreateTaskController {
  handle = async (req: Request, res: Response) => {
    const createTask = new CreateTask()

    const { description, finishedAt, userId } = req.body as TaskDTO

    const result = await createTask.create({
      description, finishedAt, userId,
    })

    return res.status(200).json(result)
  }
}