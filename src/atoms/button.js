import React from 'react';
import './button.css';

function Button() {
  const handleClick = (event) => {
    console.log('this is:', this);
  }


  return (
    <button className="Button" onClick={handleClick}>
      Click me
    </button>
  );
}

export default Button;
