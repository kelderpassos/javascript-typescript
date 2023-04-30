import { z } from 'zod'

export const UserZodSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export type UserDTO = z.infer<typeof UserZodSchema>



