import styled from 'styled-components'
import { ElementProps } from '.'

export const CardSummaryContainer = styled.div<ElementProps>`
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  background: ${(props) =>
    props.green ? props.theme['green-700'] : props.theme['gray-600']};
`
