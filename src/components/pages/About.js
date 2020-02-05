import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Img from '../common/Img';
import './About.scss';

const About = () => {
  const { config: { about } } = useContext(AppContext);
  const { caption, text, img } = about;

  return (
    <section className='about'>
      <div className='about__caption-wrapper'>
        <h1 className="caption about__caption">
          {caption}
        </h1>
      </div>
      <div className='about__info info'>
        <p className='info__text'>
          {text}
        </p>
        <Img imgSource={img} additionalClasses='info__img'/>
      </div>
    </section>
  )
}


export default About;