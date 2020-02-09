import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Img from '../common/Img';
import AboutText from '../about/AboutText';
import Skills from '../about/Skills';
import './About.scss';

const About = () => {
  const { config: { about } } = useContext(AppContext);
  const { caption, content, img, skills } = about;
  const { caption: skillsCaption, skillsList } = skills;

  return (
    <section className='about container'>
      <h1 className="caption about__caption">
        {caption}
      </h1>
      <div className='about__info info'>
        <div className='about-text__wrapper'>
          {
            content.map((item, i) =>
              <AboutText key={i} {...item} />
            )
          }
          <Skills caption={skillsCaption} skillsList={skillsList}/>
        </div>
        <Img imgSource={img} additionalClasses='info__img' />
      </div>
    </section>
  )
}

export default About;