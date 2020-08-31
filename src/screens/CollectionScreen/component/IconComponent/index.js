import React from 'react';

const IconComponent = (props) => {
  return (
    <object type='image/svg+xml' data={props.svg} width='24px' height='24px'>
      <img alt='test' />
    </object>
  );
};

export default IconComponent;
