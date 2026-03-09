import Header from './components/Header';
import About from './sections/About';
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

      </main>
     
    </div>
  );
}

export default App;