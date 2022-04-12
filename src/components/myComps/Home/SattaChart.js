import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'components/common/Loader';
import useFetch from 'hooks/useFetch';

const defaultYears = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013
];

const SattaChart = () => {
  const { data, loading, error } = useFetch(
    `https://royal-satta-server.herokuapp.com/api/v1/location`
  );
  const [locations, setLocations] = useState([]);
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
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-center align-items-center fw-bold fs-4">
        Satta Chart
      </Card.Header>
      {!loading ? (
        <Table bordered responsive className="m-0 text-center">
          <colgroup>
            <col className="bg-soft-primary" />
            <col />
            <col />
          </colgroup>
          <tbody className="align-middle text-center">
            {locations &&
              locations.length > 0 &&
              locations.map(location => (
                <tr key={location._id}>
                  <td>
                    <span className="text-dark h5 fs-0 text-uppercase">
                      {location.name}
                    </span>
                  </td>
                  {defaultYears.map((year, i) => (
                    <td key={i}>
                      <Link
                        to={`/chart?locationId=${location._id}&year=${year}`}
                      >
                        <span className="text-dark h5 fs--1">{year}</span>
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div className="my-5 py-5 text-center">
          <Loader size="sm" className="text-center" />
        </div>
      )}
    </Card>
  );
};
export default SattaChart;
