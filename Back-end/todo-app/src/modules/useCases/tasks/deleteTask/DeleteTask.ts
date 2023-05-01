import { prisma } from '@/modules/Prisma'

export class DeleteTask {
  delete = async (id: string) => prisma.task.delete({ where: { id } })
}