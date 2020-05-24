import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Global from "./styles/global";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </BrowserRouter>
            <Global />
        </div>
    );
}

export default App;
