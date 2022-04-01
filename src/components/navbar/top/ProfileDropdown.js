import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/3.jpg';
import Avatar from 'components/common/Avatar';
import PropTypes from 'prop-types';

const CustomToggle = React.forwardRef((props, ref) => (
  <a
    href={props.to}
    ref={ref}
    onClick={e => {
      e.preventDefault();
      props.onClick(e);
    }}
  >
    {props.children}
  </a>
));

const ProfileDropdown = () => {
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={CustomToggle}
        to="#"
        className="pe-0 nav-link"
      >
        <Avatar src={team3} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item className="fw-bold text-warning" href="#!">
            <FontAwesomeIcon icon="crown" className="me-1" />
            <span>Go Pro</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#!">Set status</Dropdown.Item>
          <Dropdown.Item as={Link} to="/pages/profile">
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Item href="#!">Feedback</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/pages/settings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/authentication/basic/logout">
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

CustomToggle.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default ProfileDropdown;
