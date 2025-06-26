import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
