import { FiX } from 'react-icons/fi'
import { ProductAddedToCart } from '../ProductAddedToCart'
import {
  Overlay,
  Sidebar,
  Header,
  CloseButton,
  CartAddedProductsList,
  Footer,
  TotalPrice,
  CtaButton
} from './styles'

export const CartSidebar = (): JSX.Element => {
  return (
    <>
      <Sidebar data-testid="sidebar">
        <Header>
          <CloseButton>
            <FiX size={26} color="#fd7272" />
          </CloseButton>

          <h3>Cart</h3>
        </Header>

        <CartAddedProductsList />

        <Footer>
          <TotalPrice>
            <p>Total</p>

            <p>$45,66</p>
          </TotalPrice>

          <CtaButton>place order</CtaButton>
        </Footer>
      </Sidebar>

      <Overlay />
    </>
  )
}
