import React from 'react';
import './AboutText.scss';

const AboutText = ({ 
  caption = '', 
  text = '', 
}) => {

  return (
    <article className='about-text'>
      <h3 className='about-text__caption subcaption'>
        {caption}
      </h3>
      {
        text.map((textContent, i)=>
          <p key={i} className='about-text__content'>
            {textContent}
          </p>
        )
      }
    </article>
  )
}

export default AboutText;