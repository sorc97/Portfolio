import React from 'react';
import classNames from 'classnames';
import './AboutText.scss';

const AboutText = ({ 
  caption = '', 
  text = '', 
  className = '' 
}) => {

  return (
    <article className='about-text'>
      <h3 className='about-text__caption'>
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