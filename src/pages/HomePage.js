import Hero from 'containers/Hero';
import Intro from 'containers/Intro';
import TopBreeds from 'containers/TopBreeds';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TopBreeds />
      <Intro />
    </main>
  );
};

export default HomePage;
