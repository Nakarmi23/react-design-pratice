import React, { useState } from 'react';
import Appbar from './component/Appbar';
import './style.scss';

const CollectionScreen = () => {
  return (
    <div class={'collection-container'}>
      <section className={'side-image'}>
        <div className={'slider-img'}>
          <span className={'slide-count'}>01</span>
        </div>
        <span className={'slide-price'}>$ 1337</span>
      </section>
      <section className={'container'}>
        <Appbar />
      </section>
    </div>
  );
};

export default CollectionScreen;
