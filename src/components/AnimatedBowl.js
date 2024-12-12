import React from 'react';
import './AnimatedBowl.css'; // Assuming you move the styles to a CSS file

const AnimatedBowl = () => {
  return (
    <div className="bowl wrapper">
      <div className="container">
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="wall">
          <div className="surface"></div>
          <div className="surface"></div>
          <div className="left"></div>
          <div className="top"></div>
        </div>
        <div className="ball-container">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBowl;