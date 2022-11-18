import { CardSummary } from './components/card'
import {
  SummaryCardHeaderContainer,
  SummaryCardStrong,
  SummaryContainer,
} from './styled'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      <CardSummary>
        <SummaryCardHeaderContainer>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>
          {priceFormatter.format(summary.in)}
        </SummaryCardStrong>
      </CardSummary>
      <CardSummary>
        <SummaryCardHeaderContainer>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>
          {priceFormatter.format(summary.out)}
        </SummaryCardStrong>
      </CardSummary>
      <CardSummary green={true}>
        <SummaryCardHeaderContainer>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>
          {priceFormatter.format(summary.total)}
        </SummaryCardStrong>
      </CardSummary>
    </SummaryContainer>
  )
}
