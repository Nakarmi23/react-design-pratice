import React, { useState } from 'react';
import Appbar from './component/Appbar';
import IconComponent from './component/IconComponent';
import './style.scss';
import facebook from '../../assets/facebook-f-brands.svg';
import instagram from '../../assets/instagram-brands.svg';
import twitter from '../../assets/twitter-brands.svg';
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
        <div className={'main-container'}>
          <main>
            <h1>
              Explore brand <br /> new fashion clothes
            </h1>
            <hr class={'header-divider'} />
            <p class={'description'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus tempora provident laboriosam accusamus iusto harum
              expedita dolor sit. Molestias nemo ea eligendi quaerat quidem
              laboriosam accusantium tempore, dolorum odio!
            </p>
            <button>Explore</button>
          </main>
          <div className='social-link'>
            <a href='#'>
              <IconComponent svg={facebook} />
            </a>
            <a href='#'>
              <IconComponent svg={twitter} />
            </a>
            <a href='#'>
              <IconComponent svg={instagram} />
            </a>
          </div>
        </div>
        {/* <footer>
          <div className='slider-controller'>
            <button></button>
            <button></button>
          </div>
          <div className='other-descriptions'>
            <div></div>
            <div></div>
          </div>
        </footer> */}
      </section>
    </div>
  );
};

export default CollectionScreen;
