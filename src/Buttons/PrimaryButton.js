import React from 'react';
import './buttons.scss';
function PrimaryButton(props) {
  return (
    <button className="button" onClick={props.onClick} style={props.style}>{props.children}</button>
  );
}

export default PrimaryButton; 