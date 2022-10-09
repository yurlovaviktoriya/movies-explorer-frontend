import React from 'react'
import './Preloader.css'

const Preloader = ({ isLoading }) => {

  const preloaderClasses = isLoading ? 'preloader preloader_visible' : 'preloader';

  return (
    <div className={preloaderClasses}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
