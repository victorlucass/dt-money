import { ReactNode } from 'react'
import { CardSummaryContainer } from './styled'

export type ElementProps = {
  children?: ReactNode
  green?: boolean
}

export function CardSummary({ children, green }: ElementProps) {
  return <CardSummaryContainer green={green}>{children}</CardSummaryContainer>
}
