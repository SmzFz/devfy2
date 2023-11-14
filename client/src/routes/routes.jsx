import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from "../pages/App"
//importações

const Routes = () => {
  return (
    <Router>
        <Switch>
        <Route path="/" exact Component={App}/>
        </Switch>
    </Router>
  )
}
//mostra que o componente home é o principal
export default Routes;