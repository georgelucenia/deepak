import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

const MyLoginForm = ({ hasLabel }) => {
  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`);
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="email"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      {/* <Form.Group> */}
      <Button
        type="submit"
        color="primary"
        className="mt-3 w-100"
        disabled={!formData.email || !formData.password}
      >
        Log in
      </Button>
      {/* </Form.Group> */}
    </Form>
  );
};

MyLoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

MyLoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default MyLoginForm;
