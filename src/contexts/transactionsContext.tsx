import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { TransactionsDTO, TransactionsType } from "../models/transactions";

interface TransactionContextType {
  transactions: TransactionsType[];
  fetchTransactions: (query?: string) => Promise<void>;
  postCreate: (data: TransactionsDTO) => Promise<void>;
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
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }

  async function postCreate(data: TransactionsDTO) {
    const { category, description, price, type } = data;
    const response = await api.post("/transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });
    setTransactions((state) => [response.data, ...state]);
  }
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, postCreate }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
