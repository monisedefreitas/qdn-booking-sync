import { Wifi, Car, ChefHat, Trees, Heart, Star } from "lucide-react";

const About = () => {
  const features = [
    { icon: Wifi, label: "Wi-Fi Gratuito" },
    { icon: Car, label: "Estacionamento" },
    { icon: ChefHat, label: "Cozinha Equipada" },
    { icon: Trees, label: "Jardim Privado" },
    { icon: Heart, label: "Pet Friendly" },
    { icon: Star, label: "Classificação 5⭐" },
  ];

  return (
    <section id="sobre" className="py-24 subtle-gradient">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-left">
            <div>
              <h2 className="mb-6 text-qdn-text-dark">
                Sobre o Alojamento
              </h2>
              <div className="space-y-6 text-qdn-text-muted leading-relaxed text-lg">
                <p className="relative pl-4 border-l-4 border-qdn-primary/30">
                  A Quinta das Nogueiras é um refúgio de tranquilidade no coração de Portugal, 
                  onde o conforto moderno se encontra com a autenticidade rural. Rodeada por 
                  nogueiras centenárias e paisagens deslumbrantes, oferece o cenário perfeito 
                  para momentos inesquecíveis.
                </p>
                <p>
                  Com capacidade para até 6 pessoas, dispõe de quartos confortáveis, sala de 
                  estar acolhedora, cozinha totalmente equipada e um jardim privado onde pode 
                  relaxar e reconectar-se com a natureza. Localizada estrategicamente, permite 
                  fácil acesso às principais atrações da região.
                </p>
                <p className="font-medium text-qdn-text-dark">
                  Seja para uma escapadela romântica, férias em família ou retiro entre amigos, 
                  a Quinta das Nogueiras promete uma experiência única de hospitalidade portuguesa.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="chip-qdn stagger-1">Capacidade: 6 pessoas</span>
              <span className="chip-qdn stagger-2">3 Quartos</span>
              <span className="chip-qdn stagger-3">2 Casas de banho</span>
              <span className="chip-qdn stagger-4">Jardim privado</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="card-qdn fade-in-right">
            <h3 className="mb-8 text-qdn-text-dark text-center">
              Comodidades Principais
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-qdn-surface rounded-full flex items-center justify-center group-hover:bg-qdn-primary transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-5 h-5 text-qdn-primary group-hover:text-qdn-white transition-colors duration-300" />
                  </div>
                  <span className="text-qdn-text-dark font-medium group-hover:text-qdn-primary transition-colors duration-300">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-qdn-surface to-qdn-surface-alt rounded-xl text-center border border-qdn-border/50">
              <p className="text-qdn-text-muted text-lg">
                <strong className="text-qdn-primary">Check-in:</strong> 15:00 | 
                <strong className="text-qdn-primary"> Check-out:</strong> 11:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;