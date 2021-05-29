import React from "react"
import { Route, Redirect } from "react-router-dom"


export default function RouteTwo() {
  
  return (
    <Route>
     
      render={
      <Redirect to="/Home" />
      }
    </Route>
  )
}
