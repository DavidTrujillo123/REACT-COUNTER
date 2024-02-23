import React from 'react';
import '../styles/Button.css';

function Button({ text, isClickButton, actionClick }) {
  return (
    <button
      className={isClickButton ? 'btn-click' : 'btn-restart'}
      onClick={actionClick} >      
      {text}
    </button>
  );
}

export default Button;