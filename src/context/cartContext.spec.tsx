import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import { CartProvider, useCart } from './cartContext'

const wrapper: React.FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

const product1: IProduct = {
  id: '1',
  imageUrl: 'path-to-image',
  title: 'some-title',
  price: '4,50',
  quantity: 1
}

const product2: IProduct = {
  id: '2',
  imageUrl: 'path-to-image',
  title: 'some-title',
  price: '4,50',
  quantity: 1
}

const product3: IProduct = {
  id: '3',
  imageUrl: 'path-to-image',
  title: 'some-title',
  price: '4,50',
  quantity: 1
}

const products = [product1, product2, product3]

describe('cartContext', () => {
  it('should be able to add a product', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.products).toHaveLength(0)

    act(() => result.current.addProduct(product1))

    expect(result.current.products).toHaveLength(1)
  })

  it('should not be able to add the same product twice', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.products).toHaveLength(0)

    act(() => result.current.addProduct(product1))
    act(() => result.current.addProduct(product1))

    expect(result.current.products).toHaveLength(1)
    expect(result.current.products).toEqual([product1])
  })

  it('should be able to remove a product', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.products).toHaveLength(0)

    act(() => products.forEach(product => result.current.addProduct(product)))

    expect(result.current.products).toHaveLength(3)

    act(() => result.current.removeProduct(product2))

    expect(result.current.products).toHaveLength(2)
    expect(result.current.products).toEqual([product1, product3])
  })

  it("should be able to increase a product's quantity by 1", () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => result.current.addProduct(product1))
    act(() => result.current.increaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(2)
  })

  it("should be able to decrease a product's quantity by 1", () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => result.current.addProduct(product1))
    act(() => result.current.increaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(2)

    act(() => result.current.decreaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(1)
  })

  it("should be able to decrease a product's quantity but never hit 0", () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => result.current.addProduct(product1))
    act(() => result.current.increaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(2)

    act(() => result.current.decreaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(1)

    act(() => result.current.decreaseQuantity(product1))

    expect(result.current.products[0].quantity).toBe(1)
  })
})
