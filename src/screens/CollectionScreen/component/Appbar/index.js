import React from 'react';
import './style.scss';

import searchIcon from '../../../../assets/search-24px.svg';
import userIcon from '../../../../assets/person-24px.svg';

const Appbar = () => {
  return (
    <header className={'main-header'}>
      <nav>
        <div className={'main-nav'}>
          <a href='#'>Home</a>
          <a href='#' className={'active'}>
            Collection
          </a>
          <a href='#'>Other</a>
          <a href='#'>About</a>
        </div>
        <div className={'social-nav'}>
          <a href='#' className={'icon-link'}>
            <img src={searchIcon} width={24} />
          </a>
          <a href='#' className={'icon-link'}>
            <img src={userIcon} width={24} />
          </a>
        </div>
      </nav>
      <div className={'red-sq'}></div>
    </header>
  );
};

export default Appbar;
