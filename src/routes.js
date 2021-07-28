import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Views/Home/Home"
import About from "./Views/About/About"
import Legal from "./Views/Legal/Legal"
import Params from "./Views/Params/Params"

export default <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/legal" component={Legal} />
    <Route path="/params" component={Params} />
    <Route render={() => <Redirect to={{pathname: "/"}} />} />
</Switch>