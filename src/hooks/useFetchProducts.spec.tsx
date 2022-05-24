import { renderHook } from '@testing-library/react-hooks'
import { Server, Response } from 'miragejs'
import { startMirageServer } from '../miragejs/server'
import { useFetchProducts } from './useFetchProducts'

describe('useFetchProducts', () => {
  let server: Server

  beforeEach(() => {
    server = startMirageServer({ environment: 'test' })
  })

  afterEach(() => {
    server.shutdown()
  })

  it('should return a list of 3 products', async () => {
    server.createList('product', 3)

    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts())

    await waitForNextUpdate()

    expect(result.current.products).toHaveLength(3)
  })
})
