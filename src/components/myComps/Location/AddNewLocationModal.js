import React, { useState } from 'react';
import { Modal, CloseButton, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNewLocationModal = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState({ name: '', timeLabel: '' });

  const addLocationHandler = () => {
    setLoading(true);
    axios
      .post('https://royal-satta.herokuapp.com/api/v1/location', locationData)
      .then(() => {
        history.push('/');
        toast.success('New Location Added');
      })
      .catch(err => {
        toast.error('Unable to add location.');
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    history.push('/');
  };

  return (
    <Modal show={true} centered onHide={handleClose} className="mb-5">
      <Modal.Header className="bg-shape modal-shape-header px-4 position-relative">
        <div className="position-relative z-index-1 light">
          <h5 className="mb-0 text-white fs-0" id="authentication-modal-label">
            Add New Location
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
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Location Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location Name"
                  name="name"
                  onChange={e => {
                    setLocationData({ ...locationData, name: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Time Label</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Time Label"
                  name="timeLabel"
                  onChange={e => {
                    setLocationData({
                      ...locationData,
                      timeLabel: e.target.value
                    });
                  }}
                />
              </Form.Group>

              <Button
                type="button"
                variant="primary"
                className="mt-3 me-3"
                disabled={loading}
                onClick={addLocationHandler}
              >
                Add
              </Button>
              <Button
                variant="secondary"
                className="mt-3"
                disabled={loading}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Form>
          </>
        ) : (
          <div className="m-5 p-6">
            <Loader />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

AddNewLocationModal.propTypes = {
  history: PropTypes.object
};

export default AddNewLocationModal;
