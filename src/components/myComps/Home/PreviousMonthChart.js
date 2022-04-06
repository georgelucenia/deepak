import React, { useState, useEffect, Fragment } from 'react';
import { Card, Table } from 'react-bootstrap';
import Loader from 'components/common/Loader';
import useFetch from 'hooks/useFetch';
import dayjs from 'dayjs';

const months = [
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
];

const datesArray = () => {
  let dates = [];
  const length = dayjs(
    new Date(`${new Date().getFullYear()}-${new Date().getMonth()}-01`)
  ).daysInMonth();

  for (let i = 1; i <= length; i++) {
    dates.push(
      dayjs(
        `${new Date().getFullYear()}-${new Date().getMonth()}-${i}`
      ).toDate()
    );
  }
  return dates;
};
// const localDate = date =>
//   date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString();

const PreviousMonthChart = () => {
  const { data, loading, error } = useFetch(
    'https://royal-satta.herokuapp.com/api/v1/result/getPreviousMonthResult'
  );
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (data) {
      setLocations(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setLocations([]);
    }
  }, [error]);

  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-center align-items-center fw-bold fs-4">
        {months[new Date().getMonth() - 1] + ` Chart`}
      </Card.Header>
      {!loading ? (
        <Table bordered responsive className="m-0 text-center">
          <colgroup>
            <col className="bg-soft-primary" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              {locations.map(location => (
                <th
                  key={location.location._id + 'pma'}
                  scope="col"
                  className="bg-soft-primary text-dark semi-bold"
                >
                  <span className="text-dark h5 fs-0 text-uppercase">
                    {location.location.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="align-middle text-center">
            {datesArray().map((date, i) => (
              <tr key={i + 'pmb'}>
                <td style={{ minWidth: '150px !important' }}>
                  <span className="text-dark h5 fs-0 text-uppercase">
                    {dayjs(date).format('DD-MM-YYYY')}
                  </span>
                </td>
                {locations.map(location => {
                  return (
                    <Fragment key={location.location._id + 'pmc'}>
                      {location.results.map((result, i) => {
                        return (
                          <Fragment key={i + 'pmd'}>
                            {dayjs(result.resultDate).format('DD-MM-YYYY') ===
                              dayjs(date).format('DD-MM-YYYY') && (
                              <td key={result._id}>
                                <span className="text-dark h5 fs-0 text-uppercase">
                                  {result.result || '-'}
                                </span>
                              </td>
                            )}
                          </Fragment>
                        );
                      })}
                    </Fragment>
                  );
                })}
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
export default PreviousMonthChart;
