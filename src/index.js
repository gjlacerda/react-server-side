import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from 'client/components/Routes'
import renderer from 'helpers/renderer'
import createStore from 'helpers/createStore'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))

app.use(express.static('public'))

app.get('*', async (request, response) => {
  const store = createStore(request)
  const promises = matchRoutes(Routes, request.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise
            .then(resolve)
            .catch(resolve)
        })
      }
    })
  
  await Promise.all(promises)

  const context = {}
  const content = renderer(request, store, context)

  if (context.url) {
    return response.redirect(301, context.url)
  }
  if (context.notFound) {
    response.status(404)
  }

  response.send(content)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})