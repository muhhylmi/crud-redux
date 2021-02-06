import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../component/FormComponent";
import BackComponent from "./BackComponent";
import { connect } from "react-redux";
import { postDataUser } from "../actions/UserAction";

class CreateUserComponent extends Component {
  handleSubmit = (data) => {
    this.props.dispatch(postDataUser(data));
  };

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect()(CreateUserComponent);
