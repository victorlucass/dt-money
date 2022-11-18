import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsContext } from '../../contexts/transactionsContext'
import { TransactionsType } from '../../models/transactions'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/searchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styled'

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction: TransactionsType) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'out' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
