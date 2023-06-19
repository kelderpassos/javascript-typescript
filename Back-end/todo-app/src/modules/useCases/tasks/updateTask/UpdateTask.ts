import { prisma } from '@/modules/Prisma'
import { TaskDTO, TaskZodSchema } from '@/modules/dtos/task'

export class UpdateTask {
  update = async (id: string, data: TaskDTO) => {
    const { description, finishedAt, userId } = data
    
    const parsed = TaskZodSchema.safeParse(data)

    if(!parsed.success) {
      throw new Error('Error')
    }

    await prisma.task.update({
      data: { description, finished_at: finishedAt, user_Id: userId }, 
      where: { id }
    })
  }
}