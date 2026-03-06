import Header from './components/Header';
import About from './sections/About';
import Hero from './sections/Hero';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;