import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "./BackComponent";
import { connect } from "react-redux";
import FormComponent from "../component/FormComponent";
import { getUserDetail, userUpdate } from "../actions/UserAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postDataUser: state.users.postDataUser,
    errorPostDataUser: state.users.errorPostDataUser,
  };
};

class EditUserComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  handleSubmit = (data) => {
    this.props.dispatch(userUpdate(data, this.props.match.params.id));
  };

  render() {
    if (this.props.postDataUser || this.props.errorPostDataUser) {
      if (this.props.errorPostDataUser) {
        swal("Failed!", "error");
      } else {
        swal(
          "User Updated!",
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
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(EditUserComponent);
