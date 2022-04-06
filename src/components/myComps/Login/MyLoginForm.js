import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import Loader from 'components/common/Loader';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MyLoginForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const onLoginHandler = () => {
    if (formData.username !== '' && formData.password !== '') {
      setLoading(true);
      axios
        .post('https://royal-satta.herokuapp.com/api/v1/login', formData)
        .then(() => {
          history.push('/');
          localStorage.setItem('dsfajndjn', 'asddsa');
          toast.success('Login Successful.');
        })
        .catch(err => {
          toast.error('Invalid Credentials');
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error('Invalid Details Entered.');
    }
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          placeholder="Username"
          value={formData.username}
          name="username"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Button
        variant="primary"
        className="mt-3 w-100"
        disabled={loading}
        onClick={onLoginHandler}
      >
        <div className="d-flex justify-content-center align-items-center">
          {loading && <Loader className="m-0 p-0" size="sm" />}
          Log in
        </div>
      </Button>
    </Form>
  );
};

export default MyLoginForm;
