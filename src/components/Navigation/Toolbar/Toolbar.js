import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <div className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </div>
  )
}

export default Toolbar
