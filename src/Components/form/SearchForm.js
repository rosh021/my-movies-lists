import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState({});

  const handelOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();

    if (search) {
      getMovie(search);
    }
    setSearch(" ");
  };

  return (
    <Form className="d-flex justify-content-center " onSubmit={handelOnSubmit}>
      <Row>
        <Col>
          <Form.Control placeholder="Movie Name" onChange={handelOnChange} />
        </Col>
        <Col>
          <Button variant="warning" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
