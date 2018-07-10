import React from 'react'
import {Route} from 'react-router-dom'
import Home from 'client/components/Home'
import UsersList from './UsersList';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={UsersList}/>
        </div>
    )
}

export default Routes