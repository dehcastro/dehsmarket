import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products')
      .then(response => setProducts(response.data.products))
      .catch(() => setError(true))
  }, [])

  return {
    products,
    error
  }
}
