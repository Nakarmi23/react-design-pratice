import React, { useState } from 'react';
import Appbar from './component/Appbar';
import './style.scss';

import facebook from './assets/facebook-f-brands.svg';
import instagram from './assets/instagram-brands.svg';
import twitter from './assets/twitter-brands.svg';
import ImageSlider from './component/ImageSlider';
import Footer from './component/Footer';

import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image4.webp';
import Image4 from './assets/image5.jpg';

const CollectionScreen = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  const handleLeftClick = () => {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    }
  };

  const handleRightClick = () => {
    if (activeImage < images.length - 1) {
      setActiveImage(activeImage + 1);
    }
  };

  return (
    <div className={'collection-container'}>
      <section className={'side-image'}>
        <ImageSlider activeImage={activeImage} images={images} />
        <span className={'slide-price'}>$ 1337</span>
      </section>
      <section className={'container'}>
        <Appbar />
        <div className={'main-container'}>
          <main>
            <h1>
              Explore brand <br /> new fashion clothes
            </h1>
            <hr className={'header-divider'} />
            <p className={'description'}>
              Lorem ipsumc, dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus tempora provident laboriosam accusamus iusto harum
              expedita dolor sit. Molestias nemo ea eligendi quaerat quidem
              laboriosam accusantium tempore, dolorum odio!
            </p>
            <button>Explore</button>
          </main>
          <div className='social-link'>
            <a href='#'>
              <img src={facebook} width={24} height={24} />
            </a>
            <a href='#'>
              <img src={twitter} width={24} height={24} />
            </a>
            <a href='#'>
              <img src={instagram} width={24} height={24} />
            </a>
          </div>
        </div>
        <Footer
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      </section>
    </div>
  );
};

export default CollectionScreen;
