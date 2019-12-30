import React from "react";
import { Switch, Route } from "react-router-dom";

export function Routing() {
    return (
       
            <Switch>
                <Route path="/about"></Route>
                <Route path="/users"></Route>
                <Route path="/"></Route>
            </Switch>
    
    );
}
