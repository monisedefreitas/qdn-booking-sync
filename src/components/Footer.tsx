import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-qdn-text-dark text-qdn-white">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/src/assets/logo-3-nogueiras.png" alt="Quinta das 3 Nogueiras" className="w-10 h-10" />
              <h3 className="text-2xl font-bold">Quinta das 3 Nogueiras</h3>
            </div>
            <p className="text-qdn-surface mb-6 leading-relaxed">
              Refúgio autêntico entre nogueiras centenárias, onde o conforto 
              moderno encontra a tranquilidade rural portuguesa.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/quinta3nogueiras" className="text-qdn-surface hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-qdn-surface hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-qdn-surface hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-qdn-surface hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#galeria" className="text-qdn-surface hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#reservas" className="text-qdn-surface hover:text-white transition-colors">Reservas</a></li>
              <li><a href="#contato" className="text-qdn-surface hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-qdn-surface mt-0.5 flex-shrink-0" />
                <span className="text-qdn-surface">
                  Quinta das 3 Nogueiras – Casa de Campo<br />
                  Rua da Campina, Vidigão Nascente 68<br />
                  2005-117 Santarém, Portugal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-qdn-surface" />
                <span className="text-qdn-surface">+351 966 960 101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-qdn-surface" />
                <span className="text-qdn-surface">quintadas3nogueiras@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-qdn-surface hover:text-white transition-colors">Políticas de Cancelamento</a></li>
              <li><a href="#" className="text-qdn-surface hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="text-qdn-surface hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-qdn-surface hover:text-white transition-colors">FAQ</a></li>
            </ul>
            
            <div className="mt-6 p-4 bg-qdn-text-dark/50 rounded-lg">
              <p className="text-sm text-qdn-surface">
                <strong>Alojamento Local</strong><br />
                Registo nº: 123456/AL
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-qdn-surface/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-qdn-surface text-sm">
              © {currentYear} Quinta das 3 Nogueiras. Todos os direitos reservados.
            </p>
            <p className="text-qdn-surface text-sm mt-2 md:mt-0">
              Site desenvolvido pela <a href="https://casacriativami.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-dotted">Casa Criativa M&I</a>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/351966960101?text=Olá! Gostaria de reservar a Quinta das 3 Nogueiras."
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Contactar via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;