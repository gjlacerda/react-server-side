import React from 'react'

const NotFoundPage = ({staticContext = {}}) => {
  staticContext.notFound = true
  return <h1>Ooops, route not founde.</h1>
}

export default {
  component: NotFoundPage
}