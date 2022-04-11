import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import AppContext from 'context/Context';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';
import { toast } from 'react-toastify';

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig
  } = useContext(AppContext);

  const { pathname } = useLocation();
  const history = useHistory();
  const isChat = pathname.includes('chat');

  const [isAdmin, setIsAdmin] = useState(false);

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

  const onLogout = () => {
    history.push('/');
    localStorage.removeItem('dsfajndjn');
    toast.success('Logged out successfully');
    setIsAdmin(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('dsfajndjn') === 'asddsa');
  });

  return (
    <>
      <Navbar
        className={classNames(
          'navbar-glass  fs--1 navbar-top sticky-kit d-flex justify-content-end ',
          {
            // 'navbar-glass-shadow': showDropShadow
            'me-4': !showBurgerMenu && !navbarCollapsed,
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

        {/* {(navbarPosition === 'top' || navbarPosition === 'combo') && ( */}
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0"
        >
          <Nav navbar className="me-3">
            {isAdmin && (
              <NavbarDropdown title="admin">
                <Dropdown.Item
                  as={Link}
                  to="/add-location"
                  onClick={() => {
                    if (navbarCollapsed) {
                      handleBurgerMenu();
                      // setShowAddLocationModal(true);
                    }
                  }}
                >
                  Add Location
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/update-location"
                  onClick={() => {
                    if (navbarCollapsed) {
                      handleBurgerMenu();
                    }
                  }}
                >
                  Update Location
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/delete-location"
                  onClick={() => {
                    if (navbarCollapsed) {
                      handleBurgerMenu();
                    }
                  }}
                >
                  Delete Location
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/update-result"
                  onClick={() => {
                    if (navbarCollapsed) {
                      handleBurgerMenu();
                      // setShowUpdateResultModal(true);
                    }
                  }}
                >
                  Update Result
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    onLogout();
                  }}
                >
                  Log Out
                </Dropdown.Item>
              </NavbarDropdown>
            )}
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

            {!isAdmin && (
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
            )}
          </Nav>
        </Navbar.Collapse>
        {/* )} */}
      </Navbar>
    </>
  );
};

export default NavbarTop;
