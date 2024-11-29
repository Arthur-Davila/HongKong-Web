import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Menu />
      {/* Outros componentes ou conteúdo da página */}
    </div>
  );
};

export default App;