import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = ({ href ,title, isLogo }) => (
  <li>
    <a
      className={isLogo ? '' : 'not-center'}
      id={isLogo ? 'center-logo' : ''}
      href={href}
    >
      {title}
    </a>
  </li>
);

NavBarItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLogo: PropTypes.bool.isRequired
};

export default NavBarItem;
