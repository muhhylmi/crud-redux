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
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/create" component={CreateUserComponent} />
          <Route exact path="/edit/:id" component={EditUserComponent} />
          <Route exact path="/detail/:id" component={DetailUserComponent} />
        </BrowserRouter>
      </div>
    );
  }
}
