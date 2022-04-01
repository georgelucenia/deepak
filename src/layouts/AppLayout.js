import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import is from 'is_js';
import MyLayout from './MyLayout';

import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from 'components/common/Toast';
import Error404 from 'components/errors/Error404';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Switch>
        <Route path="/errors/404" exact component={Error404} />
        <Route component={MyLayout} />
        <Redirect to="/errors/404" />
      </Switch>
      <ToastContainer
        transition={Fade}
        closeButton={CloseButton}
        closeOnClick
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};

export default Layout;
