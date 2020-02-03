import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import photo from '../../img/roJHrwa3rTg.jpg';
import './About.scss';

const About = () => {
  const { config: { about } } = useContext(AppContext);
  const { caption, text } = about;

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
        <div className='info__img'>
          <img src={photo} alt='' />
        </div>
      </div>
    </section>
  )
}


export default About;