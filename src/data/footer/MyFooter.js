import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <div className="mt-5">
      <h5 className="text-uppercase text-dark opacity-85 mb-3">Disclaimer</h5>
      <p className="text-600">
        Royalsatta.com is a non-commercial website. Viewing this website is your
        own risk, all the information shown on website is sponsored and we warn
        you that satta may be banned or illegal in your country. We are not
        responsible for any issues or scam. We respect all country rules/laws.
        If you not agree with our site disclaimer. Please quit our site right
        now.
      </p>
      <section className=" bg-dark py-0 text-center fs--1 light">
        <hr className="my-0 border-600 opacity-25" />
        <div className="container-fluid py-3">
          <Row className="justify-content-center">
            <Col xs={12}>
              <p className="mb-0 text-600">
                Real Kings <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
                <span className="text-white opacity-85">
                  All rights reserved
                </span>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default MyFooter;
