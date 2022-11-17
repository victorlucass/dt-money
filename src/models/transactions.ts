export interface TransactionsType {
  id: number;
  description: string;
  type: "in" | "out";
  category: string;
  price: number;
  createdAt: string;
}
