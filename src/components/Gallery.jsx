import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const images = [
  {
    src: image1,
    title: 'SORPRESAS ESPECIALES',
    description: 'Porque sabemos lo que te gusta',
  },
  {
    src: image2,
    title: 'CAFÉ POST-CARRERA',
    description: 'Momento de relax después de los 5km',
  },
  {
    src: image3,
    title: 'FRATERNIDAD',
    description: 'Crioterapia para relajar el cuerpo',
  },
  {
    src: image4,
    title: 'CR NIGHT EDITION',
    description: 'Agradecimentos especiales a @carmela por el recibimiento',
  },
  {
    src: image5,
    title: 'RECAP CR FT. KARU',
    description: 'Recorriendo las calles de la ciudad',
  },
  {
    src: image6,
    title: 'COFFEE RUN V4',
    description: 'Reponiendo energías después de correr en @tatakuaalfajores',
  },
  {
    src: image7,
    title: 'RESUMEN DEL ENCUENTRO',
    description: 'Corriendo en @lapatiss',
  },
  {
    src: image8,
    title: 'PRIMER COFFE RUN',
    description: 'Así lo vivimos en @chaval.obrador',
  },
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-light text-[#7B4E36] text-center mb-12 tracking-tight">GALERÍA</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200"
            onClick={() => setSelected(img)}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-white rounded-lg p-4 max-w-lg w-full mx-4 text-center relative"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="p-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-1 tracking-wider">{selected.title}</h3>
              <p className="text-xs text-gray-500 tracking-wide">{selected.description}</p>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;