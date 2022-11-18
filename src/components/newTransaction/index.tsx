import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  TransactionType,
  TransactionTypeButton,
} from "./styled";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  // type: zod.enum(["in", "out"]),
});

type NewTransactionType = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionType>({
    resolver: zodResolver(newTransactionFormSchema),
  });
  function handleCreateNewTransaction(data: NewTransactionType) {
    console.log(data);
  }
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogCloseButton>
          <X />
        </DialogCloseButton>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form
          action="submit"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
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
          <button type="submit" disabled={isSubmitting}>
            Criar
          </button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
