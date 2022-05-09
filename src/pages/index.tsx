import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
import { Header, CartButton } from '../styles/mainPageStyles'
import { ProductList } from '../components/ProductList'
import { useFetchProducts } from '../hooks/useFetchProducts'
import { CartSidebar } from '../components/CartSidebar'

const Home: NextPage = () => {
  const { products } = useFetchProducts()

  return (
    <div>
      <Head>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <title>Deh's Market</title>
      </Head>

      {/* <CartSidebar /> */}

      <Header>
        <Image src="/images/dehsmarket.png" alt="" width={246} height={50} />

        <CartButton onClick={() => {}}>
          <span>0</span>

          <FiShoppingCart size={22} color="#fff" />
        </CartButton>
      </Header>

      <ProductList products={products} />
    </div>
  )
}

export default Home
