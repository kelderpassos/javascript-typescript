import { z } from 'zod'

export const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'o ciclo precisa ter no mínimo 5 min')
    .max(60, 'o ciclo precisa ter no máximo 60 min'),
})

export type newCycleForm = z.infer<typeof newCycleFormValidationSchema>
