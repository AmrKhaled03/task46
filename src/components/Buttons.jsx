import React, { useContext } from "react";
import { myContext } from "./ContextApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  const { setDates, times = [] } = useContext(myContext);

  return (
    <div className="d-flex justify-content-center align-items-center text-center buttons">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="p-2">
            <Button
              variant="success"
              className="w-100"
              onClick={() => setDates(times)}
            >
              Show Dates
            </Button>
          </Col>
          <Col lg={6} md={12} sm={12} className="p-2">
            <Button
              variant="danger"
              className="w-100"
              onClick={() => setDates([])}
            >
              Hide Dates
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
