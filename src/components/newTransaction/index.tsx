import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { DialogCloseButton, DialogContent, DialogOverlay } from "./styled";
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
          <button type="submit">Criar</button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
