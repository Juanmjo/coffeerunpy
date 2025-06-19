import { FaInstagram, FaWhatsapp, FaStrava } from 'react-icons/fa';

function Social() {
  return (
    <section id="social" className="py-16 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-light text-[#7B4E36] mb-10 tracking-tight">SÍGUENOS EN REDES</h2>
        
        <div className="flex justify-center space-x-10 mb-12">
          <a
            href="https://www.instagram.com/coffeerunpy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FHqk3S1XaMJL9kMxDFSVESs%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafxPO94chgYfU9lZK9JBNc36y11zeAGjpml0MuvTasoLE54a5CXGyPbGSjlfQ_aem_cA0wir6iS_IYAtNqGBIIGw&e=AT3qIxFkwPLuKzwMgSi_TkKR43S83tIjh_LSuMoD06mQcZdexEr6wcikc299jlP39Zt6jgWcB1UdrnbDvWhWJOeX5o-IxNL5g1lXZSs" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fstrava.app.link%2F4d6zNdexBRb%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadFHl80G-E3BIg4HRl9j6M6Q6ER-sVG8ktx1iaLacKaKuZ6K6hg6Jn1nDrCow_aem_0fphAXvoeomF2TJ291SqbA&e=AT21Pb-fNp4RqgkMbP0iqPw0VojOjzToiG61_KqMoMcr7dHRO7kVThS4XeEpZt8Qpw6UcbB4GFueAyNG8enZyG7TNzw2c8PgQjl4Cy4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="Strava"
          >
            <FaStrava className="w-6 h-6" />
          </a>
        </div>

        <div className="text-xs text-gray-500 tracking-wider space-y-2">
          <p>ÚNETE A NUESTRA COMUNIDAD DE RUNNERS Y CAFÉ-ADICTOS.</p>
          <p>COMPARTE TUS EXPERIENCIAS CON <span className="font-medium">#COFFEERUNPY</span></p>
        </div>
      </div>
    </section>
  );
}

export default Social;