import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from 'client/components/Routes'

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
    document.getElementById('root')
)


