import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "./BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/UserAction";
import DetailComponent from "../component/DetailComponent";

class DetailUserComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserComponent);
