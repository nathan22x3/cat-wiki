import Dashboard from 'containers/Dashboard';
import Hero from 'containers/Hero';
import Intro from 'containers/Intro';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Dashboard />
      <Intro />
    </main>
  );
};

export default HomePage;
