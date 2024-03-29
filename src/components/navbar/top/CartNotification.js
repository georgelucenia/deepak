import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ProductContext } from 'context/Context';
import { getProductsQuantity } from 'helpers/utils';

const CartNotification = () => {
  // const {
  //   productsState: { cartItems }
  // } = useContext(ProductContext);

  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        to="/e-commerce/shopping-cart"
        className={classNames('px-0', {
          'notification-indicator notification-indicator-warning notification-indicator-fill':
            getProductsQuantity([])
        })}
      >
        <span className="notification-indicator-number">
          {getProductsQuantity([])}
        </span>
        <FontAwesomeIcon
          icon="shopping-cart"
          transform="shrink-7"
          className="fs-4"
        />
      </Nav.Link>
    </Nav.Item>
  );
};

export default CartNotification;
