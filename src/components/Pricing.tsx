import { Check } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      season: "Baixa Temporada",
      period: "Nov - Mar",
      price: "85",
      description: "Perfeito para uma escapadela tranquila",
      color: "border-qdn-muted"
    },
    {
      season: "Média Temporada", 
      period: "Abr - Jun, Set - Out",
      price: "110",
      description: "Ideal para explorar a região",
      color: "border-qdn-primary",
      featured: true
    },
    {
      season: "Alta Temporada",
      period: "Jul - Ago",
      price: "145",
      description: "Temporada de verão com mais atividades",
      color: "border-qdn-muted"
    }
  ];

  const extras = [
    { service: "Taxa de limpeza", price: "45", unit: "uma vez" },
    { service: "Berço para bebé", price: "15", unit: "por estadia" },
    { service: "Roupa extra", price: "10", unit: "por conjunto" },
    { service: "Late check-out", price: "25", unit: "até 14h" },
  ];

  const included = [
    "Wi-Fi gratuito",
    "Estacionamento privado",
    "Roupa de cama e banho",
    "Produtos de limpeza básicos",
    "Kit de boas-vindas",
    "Suporte 24/7"
  ];

  return (
    <section className="py-24 bg-qdn-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="mb-6 text-qdn-text-dark">
            Tabela de Valores
          </h2>
          <p className="text-qdn-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Preços transparentes para todas as épocas do ano. 
            Reserva direta com as melhores condições.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`card-qdn relative group transition-all duration-300 hover:scale-105 fade-in-up stagger-${index + 1} ${
                tier.featured 
                  ? 'ring-2 ring-qdn-primary shadow-xl' 
                  : 'hover:shadow-xl hover:border-qdn-primary/30'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-qdn-primary to-qdn-primary-hover text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-qdn-text-dark mb-3">
                  {tier.season}
                </h3>
                <p className="text-qdn-text-muted mb-6 font-medium">{tier.period}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-qdn-primary">€{tier.price}</span>
                  <span className="text-qdn-text-muted text-lg">/noite</span>
                </div>
                
                <p className="text-qdn-text-muted mb-8 leading-relaxed">{tier.description}</p>
                
                <a href="#reservas" className={`${tier.featured ? 'btn-qdn-primary' : 'btn-qdn-secondary'} w-full group-hover:scale-105 transition-transform`}>
                  Verificar Disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Extras */}
          <div className="card-qdn">
            <h3 className="text-xl font-semibold text-qdn-text-dark mb-6">
              Serviços Extras
            </h3>
            <div className="space-y-4">
              {extras.map((extra, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-qdn-border last:border-b-0">
                  <span className="text-qdn-text-dark">{extra.service}</span>
                  <span className="text-qdn-primary font-medium">
                    €{extra.price} <span className="text-sm text-qdn-text-muted">({extra.unit})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Included */}
          <div className="card-qdn">
            <h3 className="text-xl font-semibold text-qdn-text-dark mb-6">
              Incluído no Preço
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {included.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-qdn-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-qdn-text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discounts */}
        <div className="mt-12 p-6 bg-qdn-surface rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-qdn-text-dark mb-2">
            Descontos Especiais
          </h3>
          <p className="text-qdn-text-muted">
            <strong>Estadia de 7+ noites:</strong> 10% desconto | 
            <strong> Estadia de 30+ noites:</strong> 20% desconto | 
            <strong> Reserva antecipada (3+ meses):</strong> 5% desconto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;