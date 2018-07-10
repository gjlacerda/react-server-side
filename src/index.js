import express from 'express'
import renderer from 'helpers/renderer'
import createStore from 'helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', (request, response) => {
    const store = createStore()
    response.send(renderer(request, store))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})