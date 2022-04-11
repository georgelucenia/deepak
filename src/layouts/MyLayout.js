import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavbarTop from 'components/navbar/top/NavbarTop';
import AppContext from 'context/Context';
import ProductProvider from 'components/app/e-commerce/ProductProvider';
import classNames from 'classnames';
import Home from 'components/myComps/Home/home';
import Login from 'components/myComps/Login/login';
import AddNewLocationModal from 'components/myComps/Location/AddNewLocationModal';
import UpdateLocationModal from 'components/myComps/Location/UpdateLocationModal';
import MyFooter from 'data/footer/MyFooter';

const MyLayout = () => {
  const { hash, pathname } = useLocation();

  const {
    config: { isFluid }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      <ProductProvider>
        <div className={classNames('content pb-2')}>
          <NavbarTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/add-location" exact component={AddNewLocationModal} />
            <Route
              path="/update-location"
              exact
              component={UpdateLocationModal}
            />
            <Route
              path="/update-result"
              exact
              component={UpdateLocationModal}
            />
            <Route
              path="/delete-location"
              exact
              component={UpdateLocationModal}
            />
          </Switch>
          {pathname === '/' && <MyFooter />}
        </div>
      </ProductProvider>
    </div>
  );
};

export default MyLayout;
