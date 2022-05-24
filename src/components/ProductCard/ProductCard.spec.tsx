import { render, screen } from '@testing-library/react'
import { ProductCard } from '.'

const product: IProduct = {
  id: '1',
  imageUrl: 'some-image-path',
  title: 'some title',
  price: '4,70',
  quantity: 1
}

describe('ProductCard', () => {
  test('should render the product card component', () => {
    render(<ProductCard product={product} />)

    const productCard = screen.getByTestId('product-card')

    expect(productCard).toBeInTheDocument()

    expect(screen.getByTestId('product-image')).toHaveAttribute(
      'src',
      product.imageUrl
    )

    expect(screen.getByText(product.title)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(product.price))).toBeInTheDocument()
  })
})
