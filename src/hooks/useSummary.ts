import { useContext } from 'react'
import { TransactionsContext } from '../contexts/transactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce(
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
  )
  return summary
}
