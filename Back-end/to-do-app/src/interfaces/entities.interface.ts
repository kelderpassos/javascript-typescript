import { z } from 'zod';

export const TaskZodSchema = z.object({
  id: z.number(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string().transform(str => new Date(str)),
})

export type TaskInterface = z.infer<typeof TaskZodSchema>


export const UserZodSchema = z.object({
  id: z.number(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string().transform(str => new Date(str)),
})

export type UserInterface = z.infer<typeof UserZodSchema>
