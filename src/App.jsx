import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import CZ from './pages/projects/CZ';
import Qualoo from './pages/projects/Qualoo';
import Aetlas from './pages/projects/Aetlas';
import Major from './pages/projects/Major';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/cz" element={<CZ />} />
      <Route path="/projects/qualoo" element={<Qualoo />} />
      <Route path="/projects/aetlas" element={<Aetlas />} />
      <Route path="/projects/major" element={<Major />} />
    </Routes>
  );
};

export default App;
