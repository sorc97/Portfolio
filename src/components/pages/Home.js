import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Home.scss';

const Home = () => {
  const { config: { main } } = useContext(AppContext);
  const { caption, subcaption } = main;

  return (
    <section className='home'>
      <h1 className='title home__title'>
        {caption}
      </h1>
      <h2 className='home__subtitle'>
        {subcaption}
      </h2>
    </section>
  )
}

export default Home;