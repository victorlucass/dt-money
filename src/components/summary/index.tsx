import { CardSummary } from "./components/card";
import {
  SummaryCardHeaderContainer,
  SummaryCardStrong,
  SummaryContainer,
} from "./styled";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <CardSummary>
        <SummaryCardHeaderContainer>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>R$ 17.400,00</SummaryCardStrong>
      </CardSummary>
      <CardSummary>
        <SummaryCardHeaderContainer>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>R$ 17.400,00</SummaryCardStrong>
      </CardSummary>
      <CardSummary green={true}>
        <SummaryCardHeaderContainer>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </SummaryCardHeaderContainer>
        <SummaryCardStrong>R$ 17.400,00</SummaryCardStrong>
      </CardSummary>
    </SummaryContainer>
  );
}
