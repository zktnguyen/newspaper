import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

const NavBar = ({ links }) => {
  const someList = links.map(link => 
    <NavBarItem key={link.title} href={link.href} title={link.title} isLogo={link.isLogo} />
  );
  return (
    <div className="container-fluid">
      <div className="tnavbar">
        <ul>
          {someList}
        </ul>
      </div>
    </div>
  );
}


NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isLogo: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

export default NavBar;
