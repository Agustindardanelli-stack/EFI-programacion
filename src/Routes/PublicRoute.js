import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({ element: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
