import React from 'react';
import './style.scss';

import left from '../../../../assets/chevron_left-24px.svg';
import right from '../../../../assets/chevron_right-24px.svg';

const Footer = (props) => {
  return (
    <footer>
      <div className='slider-controller'>
        <button onClick={() => props.handleLeftClick()}>
          <img src={left} className={'arrow'} />
        </button>
        <button onClick={() => props.handleRightClick()}>
          <img src={right} className={'arrow'} />
        </button>
      </div>
      <div className='other-descriptions'>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
