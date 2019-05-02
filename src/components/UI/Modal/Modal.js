import React from 'react';

import './Modal.css';

const getStyle = show => show
    ? ({
        transform: 'translateY(0)',
        opacity: 1
    })
    : ({
        transform: 'translateY(-100vh)',
        opacity: 0 
    });

const Modal = props => {
  return (
    <div className="Modal" style={getStyle(props.show)}>
      {props.children}
    </div>
  )
}

export default Modal
