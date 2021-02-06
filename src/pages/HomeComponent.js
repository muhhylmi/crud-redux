import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../component/TableComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <Container>
        <TableComponent users={this.props.users} />
      </Container>
    );
  }
}
