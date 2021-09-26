import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

type PrivateRouteProps = {
  component?: React.ElementType
} & RouteProps

export const AboutPage: React.FC<PrivateRouteProps> = ({ ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <h2>About</h2>
      </>
    )}
  />
)
