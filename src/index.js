import 'babel-polyfill'
import express from 'express'
import {matchRoutes} from 'react-router-config'
import Routes from 'client/components/Routes'
import renderer from 'helpers/renderer'
import createStore from 'helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', (request, response) => {
    console.log(request.url)
    const store = createStore()
    matchRoutes(Routes, request.path)  
    response.send(renderer(request, store))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})