import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Dashboard/Customer";
import CustomerList from "../pages/Dashboard/Customer/internals/List";
import Product from "../pages/Dashboard/Product";
import ProductList from "../pages/Dashboard/Product/internals/List";
import ServiceOrder from "../pages/Dashboard/ServiceOrder";
import ServiceOrderList from "../pages/Dashboard/ServiceOrder/internals/List";
import ServiceOrderEdit from "../pages/Dashboard/ServiceOrder/internals/ServiceOrderEdit";
import ListAll from "../pages/Dashboard/ServiceOrder/internals/ListAll";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/customer" exact isPrivate component={Customer} />
      <Route path="/customer/list" isPrivate exact component={CustomerList} />
      <Route path="/os" isPrivate exact component={ServiceOrder} />
      <Route path="/os/list" isPrivate exact component={ServiceOrderList} />
      <Route path="/os/list/:id" isPrivate exact component={ServiceOrderEdit} />
      <Route path="/os/list-all" isPrivate exact component={ListAll} />
      <Route path="/product" isPrivate exact component={Product} />
      <Route path="/product/list" isPrivate exact component={ProductList} />
    </Switch>
  );
};

export default Routes;
