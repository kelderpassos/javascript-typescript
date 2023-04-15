import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'

import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../context/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    totalPassedSeconds,
    markCurrentCycleAsFinished,
    configureTotalPassedSeconds,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const passedSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (passedSeconds >= totalSeconds) {
          markCurrentCycleAsFinished()
          configureTotalPassedSeconds(totalSeconds)
          clearInterval(interval)
        } else {
          configureTotalPassedSeconds(passedSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCurrentCycleAsFinished,
    configureTotalPassedSeconds,
  ])

  const currentSeconds = activeCycle ? totalSeconds - totalPassedSeconds : 0
  const secondsInMinutes = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const seconds = String(secondsAmount).padStart(2, '0')
  const minutes = String(secondsInMinutes).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
