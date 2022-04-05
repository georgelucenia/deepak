import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

const Loader = props => (
  <Row className={`flex-center ${props.className}`}>
    <Col xs="auto">
      <Spinner as="span" animation="border" {...props} />
    </Col>
  </Row>
);

Loader.propTypes = { ...Spinner.propTypes };

Loader.defaultProps = {
  size: 'sm',
  variant: 'dark'
};

export default Loader;
