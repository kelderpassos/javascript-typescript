import { prisma } from '@/modules/Prisma'

export class GetAllTasks {
  readAll = async (userId: string) => {

    const allTasks = await prisma.task.findMany({
      where: { id: userId }
    })

    return { allTasks }
  }
}