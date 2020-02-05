import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Img.scss';

const Img = ({ imgSource, additionalClasses, children }) => {
  let [isLoaded, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
  }, [imgSource]);

  const imgClasses = classNames(
    "img",
    {
      "img_loaded": isLoaded
    },
    additionalClasses
  )

  const handleImgLoad = () => {
    setLoad(true);
  }

  return (
    <div className={imgClasses}>
      <img src={imgSource} onLoad={handleImgLoad} alt='project sreen' />
      {children}
    </div>
  )
}

export default Img;