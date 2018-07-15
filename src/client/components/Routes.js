import React from 'react'
import HomePage from 'client/pages/HomePage'
import UsersListPage, {loadData} from 'client/pages/UsersListPage';

export default [
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