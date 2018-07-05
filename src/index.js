import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from './client/component/Home'

const app = express()

app.get('/', (request, response) => {
    const content = renderToString(<Home/>)
    response.send(content)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})