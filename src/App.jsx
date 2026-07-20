import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import CarKey from './pages/projects/CarKey';
import Photo from './pages/projects/Photo';
import CZ from './pages/projects/CZ';
import DinamicIsland from './pages/projects/DinamicIsland';
import NoLimits from './pages/projects/NoLimits';
import Village from './pages/projects/Village';
import Venue from './pages/projects/Venue';
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
      <Route path="/projects/carkey" element={<CarKey />} />
      <Route path="/projects/photo" element={<Photo />} />
      <Route path="/projects/cz" element={<CZ />} />
      <Route path="/projects/dinamicisland" element={<DinamicIsland />} />
      <Route path="/projects/nolimits" element={<NoLimits />} />
      <Route path="/projects/village" element={<Village />} />
      <Route path="/projects/venue" element={<Venue />} />
      <Route path="/projects/qualoo" element={<Qualoo />} />
      <Route path="/projects/aetlas" element={<Aetlas />} />
      <Route path="/projects/major" element={<Major />} />
    </Routes>
  );
};

export default App;
