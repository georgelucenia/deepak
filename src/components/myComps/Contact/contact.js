import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import editing from 'assets/img/illustrations/ecommerce-bg.png';

const Contact = () => {
  return (
    <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-left">
            <h3>Edit me!</h3>
            <p className="lead">Contact</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Contact;
