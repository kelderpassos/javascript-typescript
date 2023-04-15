import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'
import { FormContainer, MinuteInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestion"
        placeholder="Dê um nome ao seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestion">
        <option value="projeto 1"></option>
        <option value="banana"></option>
        <option value="aaaaa"></option>
        <option value="projeto 2"></option>
        <option value="projeto 3"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinuteInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
