import { createServer, Model, Factory } from 'miragejs'
import { products } from './products'

export const startMirageServer = ({ environment = 'test' } = {}) => {
  let server = createServer({
    environment,

    models: {
      product: Model
    },

    factories: {
      product: Factory.extend({
        title: index => products[index].title,
        price: index => products[index].price,
        imageUrl: index => products[index].imageUrl
      })
    },

    seeds(server) {
      server.createList('product', 9)
    },

    routes() {
      this.namespace = 'api'
      this.urlPrefix = 'http://localhost:3000'

      this.get('/products', schema => {
        return schema.all('product')
      })
    }
  })

  return server
}
