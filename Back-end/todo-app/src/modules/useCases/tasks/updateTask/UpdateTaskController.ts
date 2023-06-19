import { Request, Response } from 'express'
import { UpdateTask } from './UpdateTask' 
import { TaskDTO } from '@/modules/dtos/task'

export class UpdateTaskController {
  handle = async (req: Request, res: Response) => {
    const updateTask = new UpdateTask()

    const { description, finishedAt, userId } = req.body as TaskDTO
    const { id } = req.params

    const result = await updateTask.update(id, {
      description, finishedAt, userId,
    })

    return res.status(200).json(result)
  }
}