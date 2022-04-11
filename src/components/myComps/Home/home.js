import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Loader from 'components/common/Loader';
import classNames from 'classnames';
import useFetch from 'hooks/useFetch';
import CurrentMonthChart from './CurrentMonthChart';
import PreviousMonthChart from './PreviousMonthChart';

const Home = () => {
  // https://royal-satta.herokuapp.com
  const { data, loading, error } = useFetch(
    `https://royal-satta.herokuapp.com/api/v1/result/getTodayResult`
  );
  const { data: recentResultData } = useFetch(
    `https://royal-satta.herokuapp.com/api/v1/result/getRecentResult`
  );
  const [locations, setLocations] = useState([]);
  const [recentResult, setRecentResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setLocations(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (recentResultData) {
      setRecentResult(recentResultData.data);
    }
  }, [recentResultData]);

  useEffect(() => {
    if (data) {
      setLocations([]);
    }
  }, [error]);

  return (
    <>
      <Row className="g-3 mb-5">
        <Col xs={12}>
          <Card className="mb-5">
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
          {recentResult?.result?.result && (
            <Card className="mb-5 bg-dark">
              <Card.Body className="text-center">
                <h2 className={classNames('text-white fs-2')}>
                  {recentResult?.name}
                </h2>
                <h2 className={classNames('text-white fs-0')}>
                  ( {recentResult?.timeLabel} )
                </h2>
                <h2 className={classNames('text-white fs-2')}>
                  {recentResult?.result?.result}
                </h2>
              </Card.Body>
            </Card>
          )}
          <Card className="mb-3">
            {!loading ? (
              <>
                {locations && locations.length > 0 ? (
                  <>
                    <Card.Header className="d-flex justify-content-center align-items-center fw-bold fs-4">
                      Result
                    </Card.Header>
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
                        {locations.map(location => (
                          <tr key={location?._id}>
                            <td>
                              <span className="text-dark fs-0 h5 text-uppercase">
                                {location?.name}
                              </span>
                              <br />
                              <span className="text-dark semi-bold text-uppercase">
                                {location?.timeLabel}
                              </span>
                              <br />
                              <span className="text-dark fs--1 mt-2">
                                Record Chart
                              </span>
                            </td>
                            <td>
                              <span className="text-dark fs-1 h5">
                                {location?.yesterday &&
                                location?.yesterday != '0'
                                  ? location?.yesterday
                                  : '-'}
                              </span>
                            </td>
                            <td>
                              <span className="text-dark fs-1 h5">
                                {location?.today || 'Wait'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : (
                  <Row className="py-5 p-0 m-0 my-6 text-center">
                    <h1 className="fs-4">No Locations Yet</h1>
                  </Row>
                )}
              </>
            ) : (
              <div className="my-5 py-5 text-center">
                <Loader size="sm" />
              </div>
            )}
          </Card>
        </Col>
      </Row>
      {/* <SattaChart /> */}
      {locations && locations.length > 0 && (
        <>
          <div className="mb-5">
            <CurrentMonthChart />
          </div>
          <div className="mb-5">
            <PreviousMonthChart />
          </div>
        </>
      )}
    </>
  );
};
export default Home;
