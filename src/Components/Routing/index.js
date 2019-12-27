import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/about"></Route>
                <Route path="/users"></Route>
                <Route path="/"></Route>
            </Switch>
        </Router>
    );
}
