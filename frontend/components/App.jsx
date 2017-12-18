import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, withRouter } from "react-router-dom";
import AuthModalContainer from "./modals/auth_modal_container";
import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import CartItemsIndexContainer from "./cart_items/cart_items_index_container";
import UserShowContainer from "./user/user_show_container";
import Header from "./header/header";
import Homepage from "./homepage/homepage";
import Footer from "./footer/footer";

const App = () => (
  <div className="main-content">
    <Header />
    <Switch>
      <ProtectedRoute exact path="/cart" component={CartItemsIndexContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer}/>
      <Route path="/categories/products/:productId" component={ProductShowContainer} />
      <Route path="/products/:productId" component={ProductShowContainer} />
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route path="/categories/:categoryId" component={ProductIndexContainer} />
      <Route exact path="/" component={Homepage} />
    </Switch>
    <AuthRoute path="/login" component={AuthModalContainer} />
    <AuthRoute path="/signup" component={AuthModalContainer} />
    <Footer />
  </div>
);

export default App;
