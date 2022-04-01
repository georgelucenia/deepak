import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import AppContext from 'context/Context';
import SearchBox from './SearchBox';
// import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import autoCompleteInitialItem from 'data/autocomplete/autocomplete';
// import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const { pathname } = useLocation();
  const isChat = pathname.includes('chat');

  const [showDropShadow, setShowDropShadow] = useState(false);

  const handleBurgerMenu = () => {
    navbarPosition === 'top' && setConfig('navbarCollapsed', !navbarCollapsed);
    (navbarPosition === 'vertical' || navbarPosition === 'combo') &&
      setConfig('showBurgerMenu', !showBurgerMenu);
  };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  return (
    <Navbar
      className={classNames(
        'navbar-glass  fs--1 navbar-top sticky-kit d-flex justify-content-end',
        {
          // 'navbar-glass-shadow': showDropShadow
          'navbar-glass-shadow': showDropShadow && !isChat
        }
      )}
      expand={
        navbarPosition === 'top' || navbarPosition === 'combo'
          ? topNavbarBreakpoint
          : true
      }
    >
      {/* <Logo at="navbar-top" width={35} id="topLogo" /> */}
      <Navbar.Toggle
        className={classNames('toggle-icon-wrapper me-md-3 me-2', {
          'd-lg-none': navbarPosition === 'top',
          [`d-${navbarBreakPoint}-none`]:
            navbarPosition === 'vertical' || navbarPosition === 'combo'
        })}
        as="div"
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>

      {navbarPosition === 'top' || navbarPosition === 'combo' ? (
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0"
        >
          <Nav navbar>
            {/* <NavbarTopDropDownMenus /> */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  if (navbarCollapsed) {
                    handleBurgerMenu();
                  }
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/chart"
                onClick={() => {
                  if (navbarCollapsed) {
                    handleBurgerMenu();
                  }
                }}
              >
                Chart
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => {
                  if (navbarCollapsed) {
                    handleBurgerMenu();
                  }
                }}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => {
                  if (navbarCollapsed) {
                    handleBurgerMenu();
                  }
                }}
              >
                Login
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link>
                <div className="theme-control-toggle-label">
                  <FontAwesomeIcon
                    icon={isDark ? 'sun' : 'moon'}
                    className="fs-0"
                    onClick={() => setConfig('isDark', !isDark)}
                  />
                  <span className="ms-2">{!isDark ? 'Dark' : 'Light'}</span>
                </div>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      ) : (
        <Nav
          navbar
          className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
          as="ul"
        >
          <Nav.Item as="li">
            <SearchBox autoCompleteItem={autoCompleteInitialItem} />
          </Nav.Item>
        </Nav>
      )}
    </Navbar>
  );
};

export default NavbarTop;
