import logo from "../assets/logo.jpg";

function About() {
  return (
    <section id="about" className="py-20 px-4 border-b border-gray-100 bg-amber-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="border-2 border-gray-900 p-2 inline-flex">
              <img 
                src={logo} 
                alt="Coffee Run Logo" 
                className="w-20 h-20 object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl font-light text-[#7B4E36] mb-6 tracking-tight">SOCIAL RUN</h1>
          
          <div className="flex justify-center mb-8">
            <span className="text-xs tracking-widest text-gray-500 border-t border-b border-gray-900 py-2 px-4">
              ☕🏃‍♂️
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-8 tracking-wide max-w-2xl mx-auto leading-relaxed">
            NACE CON UNA IDEA SIMPLE: COMBINAR RUNNING RECREATIVO CON BUENOS ENCUENTROS
          </p>

          <div className="space-y-6 text-sm text-gray-600 tracking-wide leading-relaxed">
            <p>
              EN COFFEE RUN PY CREEMOS QUE EL DEPORTE ES MEJOR CUANDO SE COMPARTE. SOMOS UNA COMUNIDAD DE
              CORREDORES DE TODOS LOS NIVELES QUE SE REÚNEN PARA DISFRUTAR DEL RUNNING SIN PRESIONES,
              EXPLORAR NUEVAS RUTAS Y TERMINAR CADA CARRERA COMPARTIENDO UN BUEN CAFÉ.
            </p>

            <p>
              NUESTRAS SALIDAS SON ADECUADAS PARA TODOS LOS NIVELES, DESDE PRINCIPIANTES HASTA
              CORREDORES EXPERIMENTADOS. NO SE TRATA DE COMPETIR, SINO DE DISFRUTAR DEL RECORRIDO,
              CONOCER GENTE NUEVA Y CREAR LAZOS A TRAVÉS DEL DEPORTE Y EL CAFÉ.
            </p>
          </div>

          <div className="mt-12">
            <a 
              href="#events" 
              className="inline-block px-8 py-3 text-xs font-medium text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white rounded-none transition-colors duration-200 tracking-wider"
            >
              DESCUBRE NUESTROS EVENTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;