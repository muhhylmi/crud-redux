import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "./BackComponent";

export default class EditUserComponent extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
      </Container>
    );
  }
}
