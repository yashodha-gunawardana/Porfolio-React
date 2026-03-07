import Header from './components/Header';
import About from './sections/About';
import Education from './sections/Education';
import Hero from './sections/Hero';

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
      </main>
    </div>
  );
}

export default App;