import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeroComponent from "./component/HeroComponent";
import NavbarComponent from "./component/NavbarComponent";
import CreateUserComponent from "./pages/CreateUserComponent";
import DetailUserComponent from "./pages/DetailUserComponent";
import EditUserComponent from "./pages/EditUserComponent";
import HomeComponent from "./pages/HomeComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <HeroComponent />
        <BrowserRouter>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/create">
            <CreateUserComponent />
          </Route>
          <Route exact path="/edit/:id">
            <EditUserComponent />
          </Route>
          <Route exact path="/detail/:id">
            <DetailUserComponent />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
