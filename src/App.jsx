import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
    <div className="font-sans bg-amber-50 text-gray-800 scroll-smooth">
      <Header />

      <main className="px-4">
        <section id="about" className="py-16">
          <About />
        </section>
        
        <section id="gallery" className="py-16 bg-amber-100">
          <Gallery />
        </section>
        
        <section id="events" className="py-16">
          <Events />
        </section>
        
        <section id="contact" className="py-16 bg-amber-100">
          <Contact />
        </section>
        
        <section id="social" className="py-16">
          <Social />
        </section>
      </main>

      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto text-center text-sm tracking-wider">
          <p>&copy; {new Date().getFullYear()} COFFEE RUN PY. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;