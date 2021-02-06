import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HeroComponent from "./component/HeroComponent";
import NavbarComponent from "./component/NavbarComponent";
import CreateUserComponent from "./pages/CreateUserComponent";
import DetailUserComponent from "./pages/DetailUserComponent";
import EditUserComponent from "./pages/EditUserComponent";
import HomeComponent from "./pages/HomeComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Latihan CRUD dengan Redux",
      users: [
        {
          id: 1,
          nama: "Syahabuddin",
          alamat: "Kemit",
        },
        {
          id: 2,
          nama: "Hylmi",
          alamat: "Kwaren",
        },
        {
          id: 3,
          nama: "Husna",
          alamat: "Ngawen",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <HeroComponent title={this.state.title} />
        <BrowserRouter>
          <Route exact path="/">
            <HomeComponent users={this.state.users} />
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
