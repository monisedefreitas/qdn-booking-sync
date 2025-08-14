import { Car, Plane, Train, Mountain, Utensils, Camera, Calendar, Compass, TreePine, Waves } from "lucide-react";
import InteractiveMap from "./InteractiveMap";
import SeasonalActivitiesGuide from "./SeasonalActivitiesGuide";

const Location = () => {
  const attractions = [
    {
      icon: Camera,
      name: "Igreja do Santíssimo Milagre",
      distance: "3 km",
      description: "Património religioso único no mundo"
    },
    {
      icon: Mountain,
      name: "Centro Histórico de Santarém",
      distance: "6 km",
      description: "Capital do Gótico português"
    },
    {
      icon: Mountain,
      name: "Casa do Brasil",
      distance: "6 km",
      description: "História dos Descobrimentos"
    },
    {
      icon: Camera,
      name: "Portas do Sol",
      distance: "7 km",
      description: "Miradouro e jardins históricos"
    },
    {
      icon: Mountain,
      name: "Mosteiro de Alcobaça",
      distance: "58 km",
      description: "Património Mundial UNESCO"
    },
    {
      icon: Mountain,
      name: "Mosteiro da Batalha",
      distance: "49 km",
      description: "Património Mundial UNESCO"
    },
    {
      icon: Camera,
      name: "Óbidos",
      distance: "52 km",
      description: "Vila medieval murada"
    },
    {
      icon: TreePine,
      name: "Fátima",
      distance: "42 km",
      description: "Santuário de peregrinação mundial"
    },
    {
      icon: Waves,
      name: "Nazaré",
      distance: "75 km",
      description: "Ondas gigantes e praia famosa"
    },
    {
      icon: Waves,
      name: "São Martinho do Porto",
      distance: "68 km",
      description: "Lagoa natural protegida"
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

        {/* Main Content Grid - Improved Layout */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Interactive Map - Takes full height on large screens */}
          <div className="lg:col-span-1 xl:col-span-1 fade-in-left">
            <div className="h-full">
              <InteractiveMap />
            </div>
          </div>

          {/* Attractions & Info - Better distributed */}
          <div className="lg:col-span-1 xl:col-span-2 space-y-8 fade-in-right">
            {/* Attractions Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pontos de Interesse */}
              <div className="card-qdn h-fit">
                <div className="flex items-center space-x-3 mb-6">
                  <Compass className="w-6 h-6 text-qdn-primary" />
                  <h3 className="text-qdn-text-dark">
                    Pontos de Interesse
                  </h3>
                </div>
                <div className="space-y-3">
                  {attractions.slice(0, 6).map((attraction, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-qdn-surface transition-colors group">
                      <div className="w-8 h-8 bg-qdn-surface group-hover:bg-qdn-primary rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                        <attraction.icon className="w-4 h-4 text-qdn-primary group-hover:text-qdn-white" />
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
                
                {/* More attractions in a compact format */}
                {attractions.length > 6 && (
                  <div className="mt-4 pt-4 border-t border-qdn-border">
                    <div className="grid grid-cols-2 gap-2">
                      {attractions.slice(6).map((attraction, index) => (
                        <div key={index + 6} className="flex items-center space-x-2 p-2 rounded hover:bg-qdn-surface transition-colors">
                          <attraction.icon className="w-3 h-3 text-qdn-primary flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-qdn-text-dark truncate">{attraction.name}</p>
                            <p className="text-xs text-qdn-primary">{attraction.distance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Transport & Local Tips */}
              <div className="space-y-6">
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
                      <span>Hospital: Hospital de Santarém (7 km)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Farmácia: Centro de Santarém (6 km)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Gasolineiras: A1 e centro (10 km)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-qdn-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>WiFi gratuito em toda a propriedade</span>
                    </li>
                  </ul>
                </div>
              </div>
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

          {/* Intelligent Seasonal Activities */}
          <SeasonalActivitiesGuide 
            checkIn={new Date().toISOString().split('T')[0]} 
            checkOut={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} 
          />
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