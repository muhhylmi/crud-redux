import React from "react";
import { connect } from "react-redux";
import { Container, Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    getDetailError: state.users.getDetailError,
  };
};

const DetailComponent = (props) => {
  return (
    <Container>
      <Table dark>
        <tbody>
          <tr>
            <th width="200">ID</th>
            <th width="10">:</th>
            <th>{props.getUserDetail.id}</th>
          </tr>
          <tr>
            <th width="200">NAMA</th>
            <th width="10">:</th>
            <th>{props.getUserDetail.nama}</th>
          </tr>
          <tr>
            <th width="200">Alamat</th>
            <th width="10">:</th>
            <th>{props.getUserDetail.alamat}</th>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default connect(mapStateToProps)(DetailComponent);
