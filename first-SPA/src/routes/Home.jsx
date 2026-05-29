import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Writing from '../components/Writing';
import Contact from '../components/Contact';

// One page, seven movements (Slide 3).
const Home = () => (
  <>
    <Hero />
    <About />
    <Work />
    <Skills />
    <Experience />
    <Writing />
    <Contact />
  </>
);

export default Home;
