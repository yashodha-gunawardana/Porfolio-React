import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;