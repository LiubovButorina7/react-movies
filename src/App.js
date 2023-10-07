import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { Preloader } from './components/Preloader';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
