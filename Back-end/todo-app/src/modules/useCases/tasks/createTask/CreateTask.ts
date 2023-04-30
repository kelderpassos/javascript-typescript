import { prisma } from '@/modules/Prisma'
import { TaskDTO, TaskZodSchema } from '@/modules/dtos/task'

export class CreateTask {
  create = async (data: TaskDTO) => {
    const { description, finishedAt, userId } = data
    
    const parsed = TaskZodSchema.safeParse(data)

    if(!parsed.success) {
      throw new Error('Error')
    }

    await prisma.task.create({
      data: { description, finished_at: finishedAt, user_Id: userId }, 
    })
  }
}