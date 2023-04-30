import { z } from 'zod'

export const TaskZodSchema = z.object({
  id: z.number().optional(),
  description: z.string(),
  finishedAt: z.string().transform(str => new Date(str)),
  userId: z.string(),
})

export type TaskDTO = z.infer<typeof TaskZodSchema>