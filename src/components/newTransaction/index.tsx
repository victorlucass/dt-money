import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  TransactionType,
  TransactionTypeButton,
} from "./styled";
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogCloseButton>
          <X />
        </DialogCloseButton>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form action="submit">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
          <TransactionType>
            <TransactionTypeButton variant="in" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="out" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Criar</button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
