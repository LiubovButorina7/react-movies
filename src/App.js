import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { AboutMovie } from './pages/AboutMovie';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="container content">
        <BrowserRouter basename='/react-movies'>
          <Routes>
            <Route path="/" element={ <Homepage/> } />
            <Route path="/about/:id" element={ <AboutMovie/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </BrowserRouter>
      </main>   
      <Footer />      
    </div>
  );
}

export default App;
