import React from 'react';
import MyLoginForm from './MyLoginForm';
import Flex from 'components/common/Flex';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = () => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center my-5 h-100">
        <Col className="p-3" xs={10} md={5} lg={4}>
          <Flex justifyContent="center" alignItems="center" className="mb-4">
            <h5>Log in</h5>
          </Flex>
          <MyLoginForm />
        </Col>
      </Row>
    </>
  );
};

export default Login;
