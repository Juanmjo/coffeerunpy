import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    const storedMessages = JSON.parse(localStorage.getItem('coffeeRunMessages') || '[]');
    localStorage.setItem(
      'coffeeRunMessages',
      JSON.stringify([
        ...storedMessages,
        { ...formData, date: new Date().toISOString() },
      ])
    );

    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="py-20 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-light text-[#7B4E36] text-center mb-12 tracking-tight">CONTACTO</h2>
        
        <div className="bg-white p-8 md:p-12 border border-gray-200">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <FaEnvelope className="w-12 h-12 text-gray-900 mx-auto" />
              <p className="text-gray-900 text-sm tracking-wider">MENSAJE ENVIADO</p>
              <p className="text-gray-500 text-xs tracking-wide max-w-md mx-auto">
                Gracias por contactarnos. Te responderemos lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-500 mb-2 tracking-wider">NOMBRE</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-gray-500 mb-2 tracking-wider">EMAIL</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs text-gray-500 mb-2 tracking-wider">ASUNTO</label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs text-gray-500 mb-2 tracking-wider">MENSAJE</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 tracking-wider placeholder-gray-400"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3.5 text-xs font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-none transition-colors duration-200 tracking-widest"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;