import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: {
      width: "5%",
    },
  },
  {
    dataField: "nama",
    text: "Nama",
  },
  {
    dataField: "alamat",
    text: "Alamat",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const TableComponent = (props) => {
  return (
    <Container>
      <BootstrapTable keyField="id" data={props.users} columns={columns} />
    </Container>
  );
};

export default TableComponent;
