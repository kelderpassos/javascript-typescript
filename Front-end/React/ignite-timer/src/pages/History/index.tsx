import { useContext } from 'react'
import { HistoryContainer, HistoryList, StatusMarker } from './styles'
import { CyclesContext } from '../../context/CyclesContext'

export function History() {
  const { activeCycle } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <StatusMarker statusColor="green">Concluído</StatusMarker>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <StatusMarker statusColor="yellow">Em andamento</StatusMarker>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <StatusMarker statusColor="red">Interrompido</StatusMarker>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
