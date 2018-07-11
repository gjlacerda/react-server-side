import React from 'react'
import Home from 'client/components/Home'
import UsersList from './UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UsersList,
    }
]