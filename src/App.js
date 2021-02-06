import React, { Component } from "react";
import HeroComponent from "./component/HeroComponent";
import NavbarComponent from "./component/NavbarComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Latihan CRUD dengan Redux",
    };
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <HeroComponent title={this.state.title} />
      </div>
    );
  }
}
