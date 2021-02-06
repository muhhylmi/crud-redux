import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={8}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>
          <Col md={8}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col md={8}>
            <FormGroup>
              <Button color="dark" type="submit" disabled={this.props.disabled}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}
FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
