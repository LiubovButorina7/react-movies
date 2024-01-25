import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { AboutMovie } from './pages/AboutMovie';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <>
      <Header />
      <main className="container content">
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/about/:id" element={ <AboutMovie/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      </main>   
      <Footer />      
    </>
  );
}

export default App;
