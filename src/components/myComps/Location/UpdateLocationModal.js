import React, { useState, useEffect } from 'react';
import { Modal, CloseButton, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
import useFetch from 'hooks/useFetch';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateLocationModal = ({ history, location }) => {
  const [locations, setLocations] = useState([]);
  const [updating, setUpdating] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const isUpdatingResult = location?.pathname === '/update-result';

  const updateLocationHandler = () => {
    const newData = {
      locationId: selectedLocation['locationId'],
      name: selectedLocation['name'],
      timeLabel: selectedLocation['timeLabel']
    };
    console.log(selectedLocation);
    setUpdating(true);
    axios
      .post('https://royal-satta.herokuapp.com/api/v1/location/update', newData)
      .then(() => {
        history.push('/');
        toast.success('Location Updated');
      })
      .catch(err => {
        toast.error('Unable to update location.');
        console.log(err);
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const updateResultHandler = () => {
    const newData = {
      locationId: selectedLocation['locationId'],
      result: selectedLocation['result']
    };

    // console.log(newData);
    setUpdating(true);
    axios
      .post('https://royal-satta.herokuapp.com/api/v1/result/update', newData)
      .then(() => {
        history.push('/');
        toast.success('Result Updated');
      })
      .catch(err => {
        toast.error('Unable to update result');
        console.log(err);
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  const { data, loading, error } = useFetch(
    'https://royal-satta.herokuapp.com/api/v1/location'
  );

  useEffect(() => {
    if (data) {
      setLocations(data.data);
    }
    setSelectedLocation({});
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(locations);
      console.log(error);
    }
  }, [error]);

  const handleClose = () => {
    history.push('/');
  };

  const onSelectLocation = id => {
    const selected = locations.find(v => v._id === id);
    setSelectedLocation({ ...selected, locationId: id });
  };
  return (
    <Modal show={true} centered onHide={handleClose} className="mt-4">
      <Modal.Header className="bg-shape modal-shape-header px-4 position-relative">
        <div className="position-relative z-index-1 light">
          <h5 className="mb-0 text-white fs-0" id="authentication-modal-label">
            {isUpdatingResult ? 'Update Result' : 'Update Location'}
          </h5>
        </div>
        <CloseButton
          variant="white"
          className="position-absolute end-0 me-2 mt-2 top-0"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body className="p-4">
        {!loading ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Select
                onChange={e => {
                  onSelectLocation(e.target.value);
                }}
              >
                <option>Not Selected</option>
                {locations.map((v, i) => (
                  <option key={i} value={v._id}>
                    {v.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {!isUpdatingResult && (
              <>
                {' '}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={selectedLocation?.name || ''}
                    onChange={e => {
                      setSelectedLocation(p => ({
                        ...p,
                        name: e.target.value
                      }));
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Time Label</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Time Label"
                    name="timeLabel"
                    value={selectedLocation?.timeLabel || ''}
                    onChange={e => {
                      setSelectedLocation(p => ({
                        ...p,
                        timeLabel: e.target.value
                      }));
                    }}
                  />
                </Form.Group>
              </>
            )}
            {isUpdatingResult && (
              <Form.Group className="mb-3">
                <Form.Label>Result</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Result"
                  name="result"
                  value={selectedLocation?.result || ''}
                  onChange={e => {
                    setSelectedLocation(p => ({
                      ...p,
                      result: parseInt(e.target.value)
                    }));
                  }}
                />
              </Form.Group>
            )}

            <Button
              type="button"
              variant="primary"
              className="mt-3 me-3"
              disabled={updating}
              onClick={
                !isUpdatingResult ? updateLocationHandler : updateResultHandler
              }
            >
              Update
            </Button>
            <Button
              variant="secondary"
              className="mt-3"
              disabled={updating}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Form>
        ) : (
          <div className="m-5 p-6">
            <Loader />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

UpdateLocationModal.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

export default UpdateLocationModal;
