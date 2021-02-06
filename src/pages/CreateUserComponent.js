import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../component/FormComponent";
import BackComponent from "./BackComponent";
import { connect } from "react-redux";
import { postDataUser } from "../actions/UserAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postDataUser: state.users.postDataUser,
    errorPostDataUser: state.users.errorPostDataUser,
  };
};

class CreateUserComponent extends Component {
  handleSubmit = (data) => {
    this.props.dispatch(postDataUser(data));
  };

  render() {
    if (this.props.postDataUser || this.props.errorPostDataUser) {
      if (this.props.errorPostDataUser) {
        swal("Failed!", "error");
      } else {
        swal(
          "User Created!",
          "Nama : " +
            this.props.postDataUser.nama +
            " alamat : " +
            this.props.postDataUser.alamat,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CreateUserComponent);
