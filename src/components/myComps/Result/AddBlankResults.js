import React, { useState } from 'react';
import { Modal, CloseButton, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { serverDomain } from 'domain.js';

const AddBlankResults = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const updateLocationHandler = () => {
    setLoading(true);
    axios
      .post(`${serverDomain}api/v1/result/addBlankResults`, {
        date: dayjs(new Date()).format('YYYY-MM-DD')
      })
      .then(() => {
        history.push('/');
        toast.success('New results added');
      })
      .catch(err => {
        toast.error('Unable to add new results');
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
    <Modal show={true} centered onHide={handleClose} className="mt-4">
      <Modal.Header className="bg-shape modal-shape-header px-4 position-relative">
        <div className="position-relative z-index-1 light">
          <h5 className="mb-0 text-white fs-0" id="authentication-modal-label">
            Add Blank Results
          </h5>
        </div>
        <CloseButton
          variant="white"
          className="position-absolute end-0 me-2 mt-2 top-0"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body className="p-4">
        <h4 className="fs-1">Are you sue do you want to add new entries?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          variant="success"
          className="mt-3 me-3"
          disabled={loading}
          onClick={updateLocationHandler}
        >
          Yes
        </Button>
        <Button
          variant="secondary"
          className="mt-3"
          disabled={loading}
          onClick={handleClose}
        >
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddBlankResults.propTypes = {
  history: PropTypes.object
};

export default AddBlankResults;
