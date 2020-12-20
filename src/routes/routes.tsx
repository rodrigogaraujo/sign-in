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
      <Route path="/sign-in" component={SignIn} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/customer" exact isPrivate component={Customer} />
      <Route path="/customer/list" isPrivate component={CustomerList} />
      <Route path="/os" exact isPrivate component={ServiceOrder} />
      <Route path="/os/list" isPrivate component={ServiceOrderList} />
      <Route path="/os/list/:id" isPrivate component={ServiceOrderEdit} />
      <Route path="/os/list-all" isPrivate component={ListAll} />
      <Route path="/product" exact  isPrivate component={Product} />
      <Route path="/product/list" isPrivate component={ProductList} />
    </Switch>
  );
};

export default Routes;
