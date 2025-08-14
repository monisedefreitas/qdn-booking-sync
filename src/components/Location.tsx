import { MapPin, Car, Plane, Train, Mountain, Utensils, Camera } from "lucide-react";

const Location = () => {
  const attractions = [
    {
      icon: Mountain,
      name: "Serra da Estrela",
      distance: "45 km",
      description: "A montanha mais alta de Portugal continental"
    },
    {
      icon: Camera,
      name: "Aldeias Históricas",
      distance: "15-30 km",
      description: "Monsanto, Idanha-a-Velha, Sortelha"
    },
    {
      icon: Utensils,
      name: "Restaurante O Albertino",
      distance: "8 km",
      description: "Gastronomia regional autêntica"
    },
    {
      icon: Car,
      name: "Castelo Branco",
      distance: "25 km",
      description: "Centro urbano com todos os serviços"
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      title: "De Carro",
      details: "A23 saída Idanha-a-Nova (15 min)",
      time: "2h30 desde Lisboa"
    },
    {
      icon: Train,
      title: "Comboio + Carro",
      details: "CP até Castelo Branco + 25 km",
      time: "3h desde Lisboa"
    },
    {
      icon: Plane,
      title: "Avião",
      details: "Aeroporto de Covilhã (60 km)",
      time: "1h voo + 1h carro"
    }
  ];

  return (
    <section id="localizacao" className="py-24 bg-qdn-surface">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="mb-6 text-qdn-text-dark">
            Localização Privilegiada
          </h2>
          <p className="text-qdn-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            No coração da Beira Baixa, rodeada pela natureza e rica em património histórico.
            A localização ideal para explorar o melhor do interior de Portugal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="fade-in-left">
            <div className="card-qdn p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-qdn-primary/10 to-qdn-primary/5 p-6 border-b border-qdn-border">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-6 h-6 text-qdn-primary" />
                  <h3 className="text-qdn-text-dark">
                    Quinta das Nogueiras
                  </h3>
                </div>
                <p className="text-qdn-text-muted">
                  6060-101 Idanha-a-Nova, Castelo Branco
                </p>
              </div>
              
              {/* Embedded Map */}
              <div className="aspect-video bg-qdn-muted flex items-center justify-center">
                <div className="text-center text-qdn-text-muted">
                  <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Mapa do Google Maps</p>
                  <p className="text-sm">(será integrado com localização real)</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-qdn-primary">Coordenadas:</strong>
                    <br />
                    <span className="text-qdn-text-muted">39.9167, -7.2333</span>
                  </div>
                  <div>
                    <strong className="text-qdn-primary">Altitude:</strong>
                    <br />
                    <span className="text-qdn-text-muted">245 metros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attractions & Transport */}
          <div className="space-y-8 fade-in-right">
            {/* Nearby Attractions */}
            <div className="card-qdn">
              <h3 className="text-qdn-text-dark mb-6">
                Pontos de Interesse
              </h3>
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-qdn-surface transition-colors group">
                    <div className="w-12 h-12 bg-qdn-surface group-hover:bg-qdn-primary rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <attraction.icon className="w-6 h-6 text-qdn-primary group-hover:text-qdn-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-qdn-text-dark">{attraction.name}</h4>
                        <span className="text-sm text-qdn-primary font-medium">{attraction.distance}</span>
                      </div>
                      <p className="text-qdn-text-muted text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Get Here */}
            <div className="card-qdn">
              <h3 className="text-qdn-text-dark mb-6">
                Como Chegar
              </h3>
              <div className="space-y-4">
                {transportInfo.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-qdn-border rounded-lg">
                    <div className="w-10 h-10 bg-qdn-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <transport.icon className="w-5 h-5 text-qdn-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-qdn-text-dark">{transport.title}</h4>
                        <span className="text-sm text-qdn-primary font-medium">{transport.time}</span>
                      </div>
                      <p className="text-qdn-text-muted text-sm">{transport.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tips */}
            <div className="card-qdn-subtle">
              <h4 className="font-semibold text-qdn-primary mb-4">
                Dicas Locais
              </h4>
              <ul className="space-y-2 text-qdn-text-muted text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Melhor época para visitar: Primavera e Outono</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supermercado mais próximo: Idanha-a-Nova (12 km)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Centro de saúde: Idanha-a-Nova</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Farmácia 24h: Castelo Branco</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;