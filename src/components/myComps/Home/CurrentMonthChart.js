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
  const length = dayjs(new Date()).format('D');

  for (let i = 1; i <= length; i++) {
    dates.push(
      dayjs(
        `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${i}`
      ).toDate()
    );
  }
  return dates;
};

const localDate = date =>
  date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString();

const CurrentMonthChart = () => {
  const [locations, setLocations] = useState([]);

  const {
    data: locationData,
    loading: loadingLocations,
    error: locationErrror
  } = useFetch(`${process.env.APIURL}/result/getCurrentMonthResult`);

  useEffect(() => {
    if (locationData) {
      setLocations(locationData.data);
    }
  }, [locationData]);

  useEffect(() => {
    if (locationErrror) {
      setLocations([]);
    }
  }, [locationErrror]);

  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-center align-items-center fw-bold fs-4">
        {months[new Date().getMonth()] + ` Chart`}
      </Card.Header>
      {!loadingLocations ? (
        <Table bordered responsive className="m-0 text-center">
          <colgroup>
            <col className="bg-soft-primary" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>
                <span className="text-dark h5 fs-0 text-uppercase">Date</span>
              </th>
              {locations.map((location, i) => (
                <th
                  key={i + 'cma'}
                  scope="col"
                  className="bg-soft-primary text-dark semi-bold"
                >
                  <span className="text-dark h5 fs-0 text-uppercase">
                    {location?.location?.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="align-middle text-center">
            {datesArray().map((date, i) => (
              <tr key={i + 'cmb'}>
                <td style={{ minWidth: '150px !important' }}>
                  <span className="text-dark h5 fs-0 text-uppercase">
                    {new Date().getDate() != i + 1
                      ? dayjs(date).format('DD-MM-YYYY')
                      : 'Today'}
                  </span>
                </td>
                {locations.map((location, i) => {
                  return (
                    <Fragment key={i + 'cmc'}>
                      {location.results.map((result, i) => {
                        return (
                          <Fragment key={i + 'cmd'}>
                            {/* {console.log(
                              'result.resultDate  : ',
                              localDate(result.resultDate)
                            )}
                            {console.log('date : ', localDate(date))} */}
                            {localDate(result.resultDate) ===
                              localDate(date) && (
                              <td>
                                <span className="text-dark h5 fs-0 text-uppercase">
                                  {result.result && result.result != '0'
                                    ? result.result
                                    : '-'}
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
export default CurrentMonthChart;
