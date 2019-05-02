import React from 'react'

import './Layout.css';

const Layout = props => {
  return (
    <>
        Toolbar, Sidebar, Backdrop
        <main className="Content">
            {props.children}
        </main>
    </>
  )
}

export default Layout
