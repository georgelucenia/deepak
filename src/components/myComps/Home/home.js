import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Loader from 'components/common/Loader';
import classNames from 'classnames';
import SattaChart from '../Chart/SattaChart';
import useFetch from 'hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch(
    ' https://royal-satta.herokuapp.com/api/v1/location'
  );
  const [time, setTime] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    var tmonth = new Array(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    );
    const timer = setInterval(() => {
      var d = new Date();
      var nmonth = d.getMonth(),
        ndate = d.getDate(),
        nyear = d.getFullYear();
      var nhour = d.getHours(),
        nmin = d.getMinutes(),
        nsec = d.getSeconds(),
        ap;
      if (nhour == 0) {
        ap = ' AM';
        nhour = 12;
      } else if (nhour < 12) {
        ap = ' AM';
      } else if (nhour == 12) {
        ap = ' PM';
      } else if (nhour > 12) {
        ap = ' PM';
        nhour -= 12;
      }

      if (nmin <= 9) nmin = '0' + nmin;
      if (nsec <= 9) nsec = '0' + nsec;
      setTime(
        '' +
          tmonth[nmonth] +
          ' ' +
          ndate +
          ', ' +
          nyear +
          ' ' +
          nhour +
          ':' +
          nmin +
          ':' +
          nsec +
          ap +
          ''
      );
    }, 1000);

    // return clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data) {
      setLocations(data.data.locations);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setLocations([]);
    }
  }, [error]);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col xs={12}>
          <Card className="mb-3">
            <Card.Body as={Flex} alignItems="center" justifyContent="center">
              <h2
                className={classNames(
                  'font-sans-serif text-white dark__text-white display-3'
                )}
              >
                Royal Satta
              </h2>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body as={Flex} alignItems="start" justifyContent="center">
              <Row className="m-0 p-0 text-center">
                <h6
                  className={classNames(
                    'font-sans-serif text-white dark__text-white'
                  )}
                >
                  {time}
                </h6>
                <p className="my-2 h5 fs-0">
                  हा भाई यही आती हे सबसे पहले खबर रूको और देखो
                </p>
                <h4
                  className={classNames(
                    'font-sans-serif text-white dark__text-white'
                  )}
                >
                  ABCDEFGH
                </h4>
                <h5
                  className={classNames(
                    'font-sans-serif text-white dark__text-white'
                  )}
                >
                  88
                </h5>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            {!loading ? (
              <Table bordered responsive className="m-0 text-center">
                <colgroup>
                  <col className="bg-soft-primary" />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="bg-soft-primary text-dark semi-bold"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="bg-soft-primary text-dark semi-bold"
                    >
                      Yesterday
                    </th>
                    <th
                      scope="col"
                      className="bg-soft-primary text-dark semi-bold"
                    >
                      Today
                    </th>
                  </tr>
                </thead>
                <tbody className="align-middle text-center">
                  {locations &&
                    locations.length > 0 &&
                    locations.map(location => (
                      <tr key={location._id}>
                        <td>
                          <span className="text-dark fs-0 h5">
                            {location.name}
                          </span>
                          <br />
                          <span className="text-dark semi-bold">
                            {location.timeLabel || '01:30 PM'}
                          </span>
                          <br />
                          <span className="text-dark fs--1 mt-2">
                            Record Chart
                          </span>
                        </td>
                        <td>
                          <span className="text-dark fs-1 h5">86</span>
                        </td>
                        <td>
                          <span className="text-dark fs-1 h5">77</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            ) : (
              <div className="my-5 py-5 text-center">
                <Loader size="sm" />
              </div>
            )}
          </Card>
        </Col>
      </Row>
      <SattaChart />
    </>
  );
};
export default Home;

{
  /* <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-left">
            <h3>Edit me!</h3>
            <p className="lead">Home</p>
          </Col>
        </Row>
      </Card.Body>
    </Card> */
}
