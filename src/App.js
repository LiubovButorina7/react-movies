import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { HashRouter, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { AboutMovie } from './pages/AboutMovie';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="container content">
        <HashRouter> {/* basename='/react-movies/#'>*/}
          <Routes>
            <Route path="/" element={ <Homepage/> } />
            <Route path="/about/:id" element={ <AboutMovie/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </HashRouter>
      </main>   
      <Footer />      
    </div>
  );
}

export default App;
