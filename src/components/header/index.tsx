import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../newTransaction'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* a sChild serve para não criar outro butão */}
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
