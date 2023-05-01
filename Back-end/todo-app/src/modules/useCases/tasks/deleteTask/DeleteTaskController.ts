import { Request, Response } from 'express'
import { DeleteTask } from './DeleteTask'

export class DeleteTaskController {
  handle = async (req: Request, res: Response) => {
    const deleteTask = new DeleteTask()
    const { id } = req.params

    await deleteTask.delete(id)

    return res.status(204).end()
  }
}