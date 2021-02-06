import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "./BackComponent";

export default class CreateUserComponent extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
      </Container>
    );
  }
}
