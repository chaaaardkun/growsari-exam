import React from 'react';
import Header from '@/components/templates/Header';

const AppContainer: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container m-auto pt-20">{children}</div>
    </div>
  );
};

export default AppContainer;
