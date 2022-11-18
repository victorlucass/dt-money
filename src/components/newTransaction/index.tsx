import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  TransactionType,
  TransactionTypeButton,
} from './styled'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/transactionsContext'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['in', 'out']),
})

type NewTransactionType = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { postCreate } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
    control,
  } = useForm<NewTransactionType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'in',
    },
  })
  async function handleCreateNewTransaction(data: NewTransactionType) {
    await postCreate(data)
    reset()
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
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={(props) => {
              return (
                <TransactionType
                  onValueChange={props.field.onChange}
                  value={props.field.value}
                >
                  <TransactionTypeButton variant="in" value="in">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="out" value="out">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Criar
          </button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
