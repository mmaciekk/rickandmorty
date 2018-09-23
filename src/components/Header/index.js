import React from 'react';
import './index.css';
import logo from '../../assets/pictures/rickmorty.png';

const Header = () => (
  <div className="header">
    <img className="logo" src={logo} alt="Rick and Morty Logo" />
  </div>
);

export default Header;
