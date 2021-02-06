import React, { Component } from "react";
import { Container } from "reactstrap";
import TableComponent from "../component/TableComponent";
import { connect } from "react-redux";
import { clearDetail, getUserList } from "../actions/UserAction";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getUserList());
    this.props.dispatch(clearDetail());
  }

  render() {
    return (
      <Container>
        <TableComponent />
      </Container>
    );
  }
}
export default connect()(HomeComponent);
