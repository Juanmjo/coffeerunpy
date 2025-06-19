import { useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTimes,
  FaCheck
} from 'react-icons/fa';

const initialEvents = [
  {
    id: 1,
    date: '21 de Junio, 2025',
    time: '08:30 AM',
    title: 'CR x Nunas',
    location: 'Punto de encuentro: KR Training - Molas Lopez',
    description: 'Recorda que iniciamos en KR y terminamos en Nunas, donde compartiremos el cierre con café, sorteos y más',
  },
  {
    id: 2,
    date: '24 de Mayo, 2025',
    time: '8:30 PM',
    title: 'CR ft. CHAVAL',
    location: 'Punto de encuentro: Chaval (Cruz Del Chaco 897)',
    description: 'Veni a correr, compartir y quedarte a disfrutar un desayuno.',
  },
  {
    id: 3,
    date: '29 de Abril, 2025',
    time: '19:00 PM',
    title: 'CR ft. CARMELA',
    location: 'Punto de encuentro: Carmela Bar (Del Maestro esq. Cassianof)',
    description: 'Sumamos kilometros y comunidad en esta Night Edition',
  },
];

function Events() {
  const [modalEvent, setModalEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    localStorage.setItem(
      'coffeeRunSignups',
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem('coffeeRunSignups')) || []),
        { ...formData, eventId: modalEvent.id, date: new Date().toISOString() },
      ])
    );
    setFormData({ name: '', email: '', phone: '' });
    setTimeout(() => {
      setModalEvent(null);
      setSuccess(false);
    }, 3000);
  };

  const parseDate = (dateStr, timeStr) => {
    const fullStr = `${dateStr} ${timeStr}`;
    return new Date(fullStr.replace('de ', '').replace(',', ''));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-light text-[#7B4E36] text-center mb-12 tracking-tight">PRÓXIMOS EVENTOS</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {initialEvents.map((event) => {
          const eventDate = parseDate(event.date, event.time);
          const isUpcoming = eventDate >= new Date();

          return (
            <div
              key={event.id}
              className="bg-white p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500 tracking-wider">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 tracking-tight">{event.title}</h3>
                  <p className="text-xs text-gray-600 tracking-wide flex items-start gap-2">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    {event.location}
                  </p>
                  <p className="text-gray-500 text-xs tracking-wide leading-relaxed">{event.description}</p>
                </div>

                {isUpcoming ? (
                  <button
                    onClick={() => setModalEvent(event)}
                    className="mt-2 md:mt-0 px-5 py-2 text-xs font-medium text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white rounded-none transition-colors duration-200 tracking-wider"
                  >
                    APUNTARME
                  </button>
                ) : (
                  <span className="mt-2 md:mt-0 px-5 py-2 text-xs font-medium text-gray-400 border border-gray-300 cursor-not-allowed rounded-none tracking-wider">
                    FINALIZADO
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="bg-white p-8 w-full max-w-md relative mx-4 border border-gray-200">
            <button
              onClick={() => setModalEvent(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-normal text-gray-900 mb-6 tracking-tight">INSCRIPCIÓN A {modalEvent.title.toUpperCase()}</h3>

            {success ? (
              <div className="text-center py-6 space-y-4">
                <FaCheck className="w-10 h-10 text-gray-900 mx-auto" />
                <p className="text-gray-700 text-sm tracking-wide">INSCRIPCIÓN REALIZADA CON ÉXITO</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="NOMBRE COMPLETO"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="TELÉFONO"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-none transition-colors duration-200 tracking-widest"
                >
                  CONFIRMAR INSCRIPCIÓN
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
