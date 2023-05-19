import React, { useState } from 'react';

const FixedHeader1 = () => {
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      {display && (
        <header className="fixed-header-1">
          <div className='firstlink'>
          <a className="a1"> ⨞ Techno-Best IT Solutions & Multi-Purpose HTML5 Template</a>
          </div>
          <a className="a1 dis" href="#">📱</a>
          <a className="a1 dis" href="#">💻</a>
          <a className="a1 dis" href="#">🖥</a>

          <button className="firstBtn">🛒 Add to Cart</button>

          <a className="a1 right" href="#">🛒</a>
        </header>
      )}

      <div onClick={toggleDisplay} className="fixed-header-dissapear-btn">
        <p className="triangle">{display ? '△'  : '▽'}</p>
      </div>
    </>
  );
};


export default FixedHeader1;