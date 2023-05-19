
import React, { useState, useEffect } from 'react';

const Languages=({title,logo})=>{
    return(
        <div className="lang1">
        <img src={logo} alt="html" />
        <p>{title}</p>
        </div>
    )
}

export default Languages;


 export const Incriment = () => {
  const [p40, setP40] = useState(1);
  const [p170, setP170] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (p40 < 40) {
        setP40((prevP40) => prevP40 + 1);
      }
      if (p170 < 170) {
        setP170((prevP170) => prevP170 + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [p40, p170]);

  return (
    <div className="cont">
      <h2>All In One HTML5 Package For a Single Price</h2>
      <div className="cont2">
        <div className="40">
          <p className="p1">{p40}+</p>
          <p>Ready Home Page</p>
        </div>
        <div className="170+">
          <p className="p2">{p170}+</p>
          <p>Ready Inner Page</p>
        </div>
      </div>
    </div>
  );
};
