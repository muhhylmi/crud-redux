import React, { Component } from "react";
import HeroComponent from "./component/HeroComponent";
import NavbarComponent from "./component/NavbarComponent";
import TableComponent from "./component/TableComponent";

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
        <TableComponent users={this.state.users} />
      </div>
    );
  }
}
