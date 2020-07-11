import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Global from "./styles/global";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Dashboard/Customer";
import CustomerList from "./pages/Dashboard/Customer/internals/List";
import Product from "./pages/Dashboard/Product";
import ProductList from "./pages/Dashboard/Product/internals/List";
import ServiceOrder from "./pages/Dashboard/ServiceOrder";
import ServiceOrderList from "./pages/Dashboard/ServiceOrder/internals/List";
import ListAll from "./pages/Dashboard/ServiceOrder/internals/ListAll";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sign-in" exact component={SignIn} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/customer" exact component={Customer} />
                    <Route
                        path="/customer/list"
                        exact
                        component={CustomerList}
                    />
                    <Route path="/os" exact component={ServiceOrder} />
                    <Route path="/os/list" exact component={ServiceOrderList} />
                    <Route path="/os/list-all" exact component={ListAll} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/product/list" exact component={ProductList} />
                </Switch>
            </BrowserRouter>
            <Global />
        </div>
    );
}

export default App;
