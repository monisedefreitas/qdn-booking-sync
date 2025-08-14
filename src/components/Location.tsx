import { MapPin, Car, Plane, Train, Mountain, Utensils, Camera, Sun, Waves, TreePine, Calendar, Clock, Compass } from "lucide-react";

const Location = () => {
  const attractions = [
    {
      icon: Camera,
      name: "Igreja do Santíssimo Milagre",
      distance: "5 km",
      description: "Património religioso único de Santarém"
    },
    {
      icon: Mountain,
      name: "Centro Histórico de Santarém",
      distance: "6 km",
      description: "Capital do Gótico português"
    },
    {
      icon: Camera,
      name: "Óbidos",
      distance: "50 km",
      description: "Vila medieval murada"
    },
    {
      icon: Waves,
      name: "Nazaré",
      distance: "70 km",
      description: "Praia e ondas gigantes mundialmente famosas"
    },
    {
      icon: Mountain,
      name: "Mosteiro da Batalha",
      distance: "45 km",
      description: "Património Mundial UNESCO"
    },
    {
      icon: TreePine,
      name: "Fátima",
      distance: "40 km",
      description: "Santuário de peregrinação mundial"
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      title: "De Carro",
      details: "A1 saída Santarém (10 min)",
      time: "1h desde Lisboa"
    },
    {
      icon: Train,
      title: "Comboio + Táxi",
      details: "CP até Santarém + transporte local",
      time: "1h30 desde Lisboa"
    },
    {
      icon: Plane,
      title: "Avião",
      details: "Aeroporto de Lisboa (80 km)",
      time: "1h voo + 1h carro"
    }
  ];

  const seasonalActivities = [
    {
      season: "Primavera",
      icon: Sun,
      activities: ["Caminhadas no Tejo", "Festivais locais", "Quintas e vinhas"],
      description: "Temperatura agradável, natureza em flor"
    },
    {
      season: "Verão",
      icon: Waves,
      activities: ["Praias fluviais", "Praias da costa", "Festivais"],
      description: "Proximidade ao litoral e praias do Tejo"
    },
    {
      season: "Outono",
      icon: TreePine,
      activities: ["Vindimas na região", "Caminhadas", "Gastronomia"],
      description: "Cores douradas, tradições vinícolas"
    },
    {
      season: "Inverno",
      icon: Mountain,
      activities: ["Visitas culturais", "Proximidade a Lisboa", "Gastronomia"],
      description: "Aconchego e património histórico"
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
            No coração do Ribatejo, às portas de Lisboa e rodeada por património histórico único.
            A localização ideal para explorar o centro de Portugal e a sua rica herança cultural.
          </p>
        </div>

        {/* Main 3-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Compact Map */}
          <div className="fade-in-left">
            <div className="card-qdn p-0 overflow-hidden h-fit">
              <div className="bg-gradient-to-br from-qdn-primary/10 to-qdn-primary/5 p-6 border-b border-qdn-border">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-6 h-6 text-qdn-primary" />
                  <h3 className="text-qdn-text-dark">
                    Quinta das Nogueiras
                  </h3>
                </div>
                <p className="text-qdn-text-muted">
                  Rua da Campina N°68, Vidigão Nascente, Santarém
                </p>
              </div>
              
              {/* Compact Map */}
              <div className="aspect-[4/3] bg-qdn-muted flex items-center justify-center">
                <div className="text-center text-qdn-text-muted">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Mapa Interativo</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-qdn-text-muted">Coordenadas:</span>
                    <span className="text-qdn-primary font-medium">39.2369, -8.6879</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-qdn-text-muted">Altitude:</span>
                    <span className="text-qdn-primary font-medium">110 metros</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-qdn-text-muted">Clima:</span>
                    <span className="text-qdn-primary font-medium">Mediterrânico continental</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-qdn-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-qdn-primary" />
                    <span className="text-sm font-medium text-qdn-text-dark">Distâncias Principais</span>
                  </div>
                  <div className="space-y-1 text-xs text-qdn-text-muted">
                    <div className="flex justify-between">
                      <span>Lisboa:</span>
                      <span>80 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Porto:</span>
                      <span>300 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coimbra:</span>
                      <span>120 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Attractions */}
          <div className="fade-in-up stagger-1">
            <div className="card-qdn h-fit">
              <div className="flex items-center space-x-3 mb-6">
                <Compass className="w-6 h-6 text-qdn-primary" />
                <h3 className="text-qdn-text-dark">
                  Pontos de Interesse
                </h3>
              </div>
              <div className="space-y-3">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-qdn-surface transition-colors group">
                    <div className="w-10 h-10 bg-qdn-surface group-hover:bg-qdn-primary rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <attraction.icon className="w-5 h-5 text-qdn-primary group-hover:text-qdn-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-qdn-text-dark text-sm truncate">{attraction.name}</h4>
                        <span className="text-xs text-qdn-primary font-medium flex-shrink-0 ml-2">{attraction.distance}</span>
                      </div>
                      <p className="text-qdn-text-muted text-xs leading-relaxed">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Transport & Local Tips */}
          <div className="space-y-6 fade-in-right stagger-2">
            {/* How to Get Here */}
            <div className="card-qdn">
              <div className="flex items-center space-x-3 mb-6">
                <Car className="w-6 h-6 text-qdn-primary" />
                <h3 className="text-qdn-text-dark">
                  Como Chegar
                </h3>
              </div>
              <div className="space-y-3">
                {transportInfo.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border border-qdn-border rounded-lg">
                    <div className="w-8 h-8 bg-qdn-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <transport.icon className="w-4 h-4 text-qdn-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-qdn-text-dark text-sm">{transport.title}</h4>
                        <span className="text-xs text-qdn-primary font-medium">{transport.time}</span>
                      </div>
                      <p className="text-qdn-text-muted text-xs">{transport.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tips */}
            <div className="card-qdn-subtle">
              <h4 className="font-semibold text-qdn-primary mb-4 text-sm">
                Informações Úteis
              </h4>
              <ul className="space-y-2 text-qdn-text-muted text-xs">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Supermercado: Centro de Santarém (6 km)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Centro de saúde: Hospital de Santarém (7 km)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Farmácia: Centro de Santarém</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>WiFi gratuito em toda a propriedade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seasonal Activities Section */}
        <div className="bg-gradient-to-br from-qdn-white to-qdn-surface rounded-3xl p-8 md:p-12 fade-in-up stagger-3">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="w-8 h-8 text-qdn-primary" />
              <h3 className="text-qdn-text-dark">
                Atividades por Estação
              </h3>
            </div>
            <p className="text-qdn-text-muted max-w-2xl mx-auto">
              Cada estação oferece experiências únicas na região. Descubra o que fazer durante a sua estadia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalActivities.map((season, index) => (
              <div key={index} className={`card-qdn text-center hover:shadow-lg transition-all duration-300 fade-in-up stagger-${index + 4}`}>
                <div className="w-16 h-16 bg-qdn-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <season.icon className="w-8 h-8 text-qdn-primary" />
                </div>
                
                <h4 className="font-semibold text-qdn-text-dark mb-3">{season.season}</h4>
                
                <div className="space-y-2 mb-4">
                  {season.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="chip-qdn text-xs">
                      {activity}
                    </div>
                  ))}
                </div>
                
                <p className="text-qdn-text-muted text-sm leading-relaxed">
                  {season.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center fade-in-up stagger-4">
            <div className="w-16 h-16 bg-qdn-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-8 h-8 text-qdn-primary" />
            </div>
            <h4 className="font-semibold text-qdn-text-dark mb-2">Natureza Preservada</h4>
            <p className="text-qdn-text-muted text-sm">
              Rodeada pela planície ribatejana e pelos trilhos junto ao Tejo, a natureza preservada do centro de Portugal.
            </p>
          </div>
          
          <div className="text-center fade-in-up stagger-5">
            <div className="w-16 h-16 bg-qdn-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-qdn-primary" />
            </div>
            <h4 className="font-semibold text-qdn-text-dark mb-2">Património Histórico</h4>
            <p className="text-qdn-text-muted text-sm">
              Próxima dos Mosteiros da Batalha e Alcobaça, e da vila medieval de Óbidos, tesouros do património nacional.
            </p>
          </div>
          
          <div className="text-center fade-in-up stagger-6">
            <div className="w-16 h-16 bg-qdn-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-qdn-primary" />
            </div>
            <h4 className="font-semibold text-qdn-text-dark mb-2">Gastronomia Local</h4>
            <p className="text-qdn-text-muted text-sm">
              Sabores autênticos da região, com restaurantes tradicionais e produtos locais de qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;