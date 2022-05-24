import { ProductCard } from '../ProductCard'
import { ProductsContainer } from './styles'

interface IProductList {
  products: IProduct[]
}

export const ProductList = ({ products }: IProductList): JSX.Element => {
  return <ProductsContainer>{/* <ProductCard /> */}</ProductsContainer>
}
