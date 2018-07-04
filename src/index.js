const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/component/Home').default
const app = express()

app.get('/', (request, response) => {
    const content = renderToString(<Home/>)
    response.send(content)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})