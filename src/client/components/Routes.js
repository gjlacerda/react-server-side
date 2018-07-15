import React from 'react'
import Home from 'client/components/Home'
import UsersList, {loadData} from './UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList,
    }
]