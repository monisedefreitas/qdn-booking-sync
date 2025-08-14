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
    <section id="sobre" className="py-20 bg-qdn-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-qdn-text-dark">
                Sobre o Alojamento
              </h2>
              <div className="space-y-4 text-qdn-text-muted leading-relaxed">
                <p>
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
                <p>
                  Seja para uma escapadela romântica, férias em família ou retiro entre amigos, 
                  a Quinta das Nogueiras promete uma experiência única de hospitalidade portuguesa.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="chip-qdn">Capacidade: 6 pessoas</span>
              <span className="chip-qdn">3 Quartos</span>
              <span className="chip-qdn">2 Casas de banho</span>
              <span className="chip-qdn">Jardim privado</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="card-qdn">
            <h3 className="mb-8 text-qdn-text-dark text-center">
              Comodidades Principais
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-qdn-surface rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-qdn-primary" />
                  </div>
                  <span className="text-qdn-text-dark font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-qdn-surface rounded-lg text-center">
              <p className="text-qdn-text-muted">
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