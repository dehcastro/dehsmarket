import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { startMirageServer } from '../miragejs/server'
import { CartProvider } from '../context/cartContext'

if (process.env.NODE_ENV === 'development') {
  startMirageServer({ environment: 'development' })
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
