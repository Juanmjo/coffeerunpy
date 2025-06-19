import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y título */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-light tracking-tight">COFFEE RUN PY</h1>
        </div>

        {/* Menú desktop (oculto en móviles) */}
        <nav className="hidden md:flex space-x-8 text-xs tracking-wider">
          <a href="#about" className="hover:text-amber-200 transition-colors">INICIO</a>
          <a href="#gallery" className="hover:text-amber-200 transition-colors">GALERÍA</a>
          <a href="#events" className="hover:text-amber-200 transition-colors">EVENTOS</a>
          <a href="#contact" className="hover:text-amber-200 transition-colors">CONTACTO</a>
          <a href="#social" className="hover:text-amber-200 transition-colors">REDES</a>
        </nav>

        {/* Botón hamburguesa (solo en móviles) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-amber-900 py-4 px-6 shadow-sm">
            <nav className="flex flex-col space-y-4 text-sm tracking-wider">
              <a 
                href="#about" 
                className="py-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                INICIO
              </a>
              <a 
                href="#gallery" 
                className="py-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                GALERÍA
              </a>
              <a 
                href="#events" 
                className="py-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTOS
              </a>
              <a 
                href="#contact" 
                className="py-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTO
              </a>
              <a 
                href="#social" 
                className="py-2 hover:text-amber-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                REDES
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;