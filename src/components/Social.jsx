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
            href="https://chat.whatsapp.com/Hqk3S1XaMJL9kMxDFSVESs?fbclid=PAZXh0bgNhZW0CMTEAAafxPO94chgYfU9lZK9JBNc36y11zeAGjpml0MuvTasoLE54a5CXGyPbGSjlfQ_aem_cA0wir6iS_IYAtNqGBIIGw" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://www.strava.com/clubs/coffeerunpy?share_sig=7845541E1741549872&fbclid=PAZXh0bgNhZW0CMTEAAadFHl80G-E3BIg4HRl9j6M6Q6ER-sVG8ktx1iaLacKaKuZ6K6hg6Jn1nDrCow_aem_0fphAXvoeomF2TJ291SqbA&_branch_match_id=1464341969000098625&_branch_referrer=H4sIAAAAAAAAAwXBSQ6CMBQA0Nu4k0FNAybEFERRlCgSNWzIry20MhRLHeLCs%2Fse17of5qY5aAUvMKDvjUZ0tTmj6JtQ9vFTsijJrRHUO%2BD8yi1SJTy%2FWME%2BCzEGuooax1qPw6m%2FqWZR2rh3tEdHFKbj4bx2av2xBezgFkP8zFGMeIW2nd0tVSDfBbC2sMqe4%2BtLMtmuJtl24tqnB8Gjn2IlU0p0VUGUfA9MeQFXsmV%2FxVA0DLAAAAA%3D"
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