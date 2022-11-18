import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionsType } from "../models/transactions";

interface TransactionContextType {
  transactions: TransactionsType[];
  fetchTransactions: (query?: string) => Promise<void>;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);
  useEffect(() => {
    fetchTransactions();
  }, []);
  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions");
    if (query) {
      url.searchParams.append("q", query);
    }
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
