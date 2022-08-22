import React from "react";
// import "./ham.css";
import { useState } from "react";
const HamButton = () => {

  const [ham,hamState]=useState('ham')
  const handleClick = () => {
      hamState('ham open')
      if(ham=='ham open')
        hamState('ham')
  };

  return (
    <div>
      <button class={ham} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamButton;
