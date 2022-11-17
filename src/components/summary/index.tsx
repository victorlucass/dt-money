import { CardSummary } from "./components/card";
import {
  SummaryCardHeaderContainer,
  SummaryCardStrong,
  SummaryContainer,
} from "./styled";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "in") {
        acc.in += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.out += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      in: 0,
      out: 0,
      total: 0,
    }
  );
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
  );
}
