import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/transactionsContext'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )
  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'in') {
            acc.in += transaction.price
            acc.total += transaction.price
          } else {
            acc.out += transaction.price
            acc.total -= transaction.price
          }
          return acc
        },
        {
          in: 0,
          out: 0,
          total: 0,
        },
      ),
    [transactions],
  )
  return summary
}
