import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { TransactionsType } from "../../models/transactions";
import { SearchForm } from "./components/searchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styled";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction: TransactionsType) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
