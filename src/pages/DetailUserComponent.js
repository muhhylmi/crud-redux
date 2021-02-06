import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "./BackComponent";

export default class DetailUserComponent extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
      </Container>
    );
  }
}
