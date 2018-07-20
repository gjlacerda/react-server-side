import React from 'react'
import App from 'client/App'
import HomePage from 'client/pages/HomePage'
import UsersListPage, {loadData} from 'client/pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users',
      }
    ]
  }  
]