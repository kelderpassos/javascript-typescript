import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteInput,
  Separator,
  StartCountdown,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome ao seu projeto"
            list="task-suggestion"
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
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdown disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdown>
      </form>
    </HomeContainer>
  )
}
