import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BurguerBuilder from "./containers/BurguerBuilder/BurguerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from './containers/Orders/Orders';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
            <Layout>
              <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={BurguerBuilder} />
              </Switch>
            </Layout>
    );
  }
}

export default App;
