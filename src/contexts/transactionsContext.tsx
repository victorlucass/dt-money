import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionsType } from "../models/transactions";

interface TransactionContextType {
  transactions: TransactionsType[];
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);
  useEffect(() => {
    getTransactions();
  }, []);
  async function getTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
