// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
  return (
    <div>
        <Navbar />
        <Home />
        <div className="about py-5">
          <About />
          <Skills />
        </div>
        <Projects />
        <div className="contact pb-3">
          <Contact />
          <Footer />
        </div>
    </div>
  );
}

export default App;