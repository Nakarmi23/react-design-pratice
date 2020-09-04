import React, { useState, Fragment } from 'react';
import likedUser from './assets/dawg.jpg';
import headerImage from './assets/VRHeader.jpg';
function MusicSiteResponsive() {
  const [likeCount, setLikeCount] = useState(1202);
  const [isLiked, setLiked] = useState(false);

  const onLikeClick = () => {
    if (isLiked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };
  const button =
    'flex items-center py-2 px-4 text-white font-light focus:outline-none';
  return (
    <Fragment>
      <header
        className={`h-64 bg-cover p-4 flex flex-col justify-between bg-gray-900`}
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundBlendMode: 'difference',
        }}>
        <div className='clearfix'>
          <button className={`${button} float-right md:float-left`}>
            <i class='material-icons'>search</i>
            <span className='pl-2 hidden md:block'>Search</span>
          </button>
        </div>
        <div className='text-white text-center flex flex-col items-center'>
          <h1 className='text-2xl'>Virtual Riot</h1>
          <div className='flex flex-row justify-around md:justify-center my-4'>
            <div className='mx-4'>9 Albums</div>
            <div className='mx-4'>105 Songs</div>
            <div className='mx-4'>Biography</div>
          </div>
          <button className={`${button} border-2 border-white  rounded-full`}>
            Start Artist Station
          </button>
        </div>
        <footer className='flex justify-between'>
          <button
            className={`flex items-center text-white font-light focus:outline-none`}
            onClick={() => onLikeClick()}>
            {isLiked ? (
              <i className='material-icons'>favorite</i>
            ) : (
              <i className='material-icons'>favorite_border</i>
            )}
            <span className='ml-2'>{likeCount}</span>
          </button>
          <div
            className='text-white flex'
            title='You and 1000 others listen to this artist items-center'>
            <span className='hidden md:block'>
              You and 1000 others listen to this artist
            </span>
            <div
              className='w-8 h-8 rounded-full bg-cover ml-4'
              style={{ backgroundImage: `url(${likedUser})` }}></div>
          </div>
        </footer>
      </header>
      <main></main>
    </Fragment>
  );
}

export default MusicSiteResponsive;
