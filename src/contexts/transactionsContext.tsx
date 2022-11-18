import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
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
    const response = await api.get("/transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
