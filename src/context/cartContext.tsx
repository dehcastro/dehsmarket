import { createContext, useCallback, useContext, useState } from 'react'

interface ICartContextData {
  products: Array<IProduct>
  addProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  increaseQuantity: (product: IProduct) => void
  decreaseQuantity: (product: IProduct) => void
}

const CartContext = createContext<ICartContextData>({} as ICartContextData)

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([])

  const addProduct = useCallback(
    (product: IProduct) => {
      const productAlreadyExists = products.includes(product)

      if (!productAlreadyExists)
        setProducts(previousProducts => [...previousProducts, product])
    },
    [products]
  )

  const removeProduct = useCallback(
    (product: IProduct) => {
      setProducts([
        ...products.filter(currentProduct => currentProduct.id !== product.id)
      ])
    },
    [products]
  )

  const increaseQuantity = useCallback(
    (product: IProduct) => {
      const newProducts = products.map(currentProduct => {
        return currentProduct.id === product.id
          ? {
              ...currentProduct,
              quantity: currentProduct.quantity + 1
            }
          : currentProduct
      })

      setProducts(newProducts)
    },
    [products]
  )

  const decreaseQuantity = useCallback(
    (product: IProduct) => {
      const newProducts = products.map(currentProduct => {
        return currentProduct.id === product.id
          ? {
              ...currentProduct,
              quantity:
                currentProduct.quantity > 1
                  ? currentProduct.quantity - 1
                  : currentProduct.quantity
            }
          : currentProduct
      })

      setProducts(newProducts)
    },
    [products]
  )

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContext, CartProvider, useCart }
