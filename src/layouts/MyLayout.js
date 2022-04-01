import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
// import Dashboard from 'components/dashboards/default';
import NavbarTop from 'components/navbar/top/NavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import AppContext from 'context/Context';
// import MainRoutes from './MainRoutes';
// import Footer from 'components/footer/Footer';
import ProductProvider from 'components/app/e-commerce/ProductProvider';
import classNames from 'classnames';
import Home from 'components/myComps/Home/home';
import Login from 'components/myComps/Login/login';
import Contact from 'components/myComps/Contact/contact';
import Chart from 'components/myComps/Chart/chart';
import MyFooter from 'data/footer/MyFooter';

const MyLayout = () => {
  const { hash, pathname } = useLocation();
  // const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition }
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
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <NavbarVertical />
      )}
      <ProductProvider>
        <div className={classNames('content pb-2')}>
          <NavbarTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            {/* <MainRoutes /> */}
          </Switch>
          <MyFooter />
        </div>
      </ProductProvider>
    </div>
  );
};

export default MyLayout;
