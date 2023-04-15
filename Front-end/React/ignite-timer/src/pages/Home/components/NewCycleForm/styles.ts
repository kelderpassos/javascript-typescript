import styled from 'styled-components'

export const FormContainer = styled.div`
  gap: 0.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  height: 2.5rem;
  color: ${(props) => props.theme['gray-100']};

  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinuteInput = styled(BaseInput)`
  width: 4rem;
`
