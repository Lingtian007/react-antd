import React, { Component } from "react";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import App from "./App";
// ui 组件
import Admin from "./admin";
import Home from "./page/home/index";
import Button from "./page/ui/buttons/index";
import Modals from "./page/ui/modals/index";
import Loadings from "./page/ui/loadings";
import Notification from "./page/ui/notification";
import Gallery from "./page/ui/gallery";
import Carousel from "./page/ui/carousel";
// 
import Login from "./page/Login/index";
import Zhuce from "./page/zhuce";
import Basic from "./page/basic";
import High from "./page/high";
import BikeMap from "./page/bikeMap";

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          

          <Route
            path="/"
            render={() => (
              <Switch>
                <Admin>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/bikeMap" component={BikeMap}></Route>
                  <Route path="/form/login" component={Login}></Route>
                  <Route path="/form/reg" component={Zhuce}></Route>
                  <Route path="/table/basic" component={Basic}></Route>
                  <Route path="/table/high" component={High}></Route>

                  <Route path="/ui/buttons" component={Button}></Route>
                  <Route path="/ui/modals" component={Modals}></Route>
                  <Route path="/ui/loadings" component={Loadings}></Route>
                  <Route
                    path="/ui/notification"
                    component={Notification}
                  ></Route>
                  <Route path="/ui/gallery" component={Gallery}></Route>
                  <Route path="/ui/carousel" component={Carousel}></Route>
                </Admin>
              </Switch>
            )}
          />

          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    );
  }
}
