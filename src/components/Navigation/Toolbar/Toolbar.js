import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <div className="Toolbar">
      <div>MENU</div>
      <div style={{height: '80%'}}>
        <Logo />
      </div>
      <nav className="_wrap">
        <NavigationItems />
      </nav>
    </div>
  )
}

export default Toolbar
