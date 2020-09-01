import React from 'react';
import './style.scss';

const ImageSlider = (props) => {
  return (
    <div
      className={'slider-img'}
      style={{ backgroundImage: `url(${props.images[props.activeImage]})` }}>
      <span className={'slide-count'}>
        {props.activeImage + 1 >= 10
          ? props.activeImage + 1
          : '0' + (props.activeImage + 1)}
      </span>
    </div>
  );
};

export default ImageSlider;
