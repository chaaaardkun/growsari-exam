import React from 'react';
import Header from '@/components/templates/Header';
import Hero from '@/components/templates/Hero';

const AppContainer: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container m-auto">{children}</div>
    </div>
  );
};

export default AppContainer;
