import { useState } from "react";
import { Calendar, Users, MessageCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Pedido de reserva enviado!",
      description: "Entraremos em contato em breve para confirmar a sua reserva.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="reservas" className="py-20 bg-qdn-surface">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-qdn-text-dark">
            Faça a Sua Reserva
          </h2>
          <p className="text-qdn-text-muted max-w-2xl mx-auto">
            Reserve diretamente connosco e garante as melhores condições. 
            Resposta rápida e atendimento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="card-qdn">
            <h3 className="text-xl font-semibold text-qdn-text-dark mb-6">
              Formulário de Reserva
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                    placeholder="O seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                  placeholder="+351 900 000 000"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                    Check-in *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                    Check-out *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                    Hóspedes
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all"
                  >
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3">3 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="5">5 pessoas</option>
                    <option value="6">6 pessoas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-qdn-text-dark mb-2">
                  Observações
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-qdn-border rounded-lg focus:ring-2 focus:ring-qdn-primary focus:border-transparent transition-all resize-none"
                  placeholder="Pedidos especiais, chegada tardia, etc."
                ></textarea>
              </div>

              <button type="submit" className="btn-qdn-primary w-full text-lg py-4">
                Enviar Pedido de Reserva
              </button>
            </form>
          </div>

          {/* Booking Info & External Links */}
          <div className="space-y-8">
            {/* Calendar Availability */}
            <div className="card-qdn">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-qdn-primary" />
                <h3 className="text-xl font-semibold text-qdn-text-dark">
                  Disponibilidade
                </h3>
              </div>
              <p className="text-qdn-text-muted mb-4">
                Consulte o calendário atualizado em tempo real com as nossas plataformas de reserva.
              </p>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 border border-qdn-border rounded-lg hover:bg-qdn-surface transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=32&h=32&fit=crop" alt="Booking.com" className="w-8 h-8 rounded" />
                    <span className="font-medium text-qdn-text-dark">Ver no Booking.com</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-qdn-text-muted" />
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 border border-qdn-border rounded-lg hover:bg-qdn-surface transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img src="https://images.unsplash.com/photo-1586253633026-8dd9c2b5ea9e?w=32&h=32&fit=crop" alt="Airbnb" className="w-8 h-8 rounded" />
                    <span className="font-medium text-qdn-text-dark">Ver no Airbnb</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-qdn-text-muted" />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card-qdn">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-qdn-primary" />
                <h3 className="text-xl font-semibold text-qdn-text-dark">
                  Contacto Direto
                </h3>
              </div>
              <p className="text-qdn-text-muted mb-4">
                Precisa de esclarecimentos? Fale connosco diretamente.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/351900000000?text=Olá! Gostaria de reservar a Quinta das Nogueiras."
                  className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-700">WhatsApp: +351 900 000 000</span>
                </a>
                
                <div className="text-center text-sm text-qdn-text-muted">
                  <p>Tempo de resposta típico: <strong>2-4 horas</strong></p>
                </div>
              </div>
            </div>

            {/* Booking Benefits */}
            <div className="card-qdn bg-gradient-to-br from-qdn-primary/5 to-qdn-primary/10 border-qdn-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-qdn-primary/5 rounded-full -translate-y-10 translate-x-10"></div>
              <h3 className="text-lg font-semibold text-qdn-primary mb-6">
                Vantagens da Reserva Direta
              </h3>
              <ul className="space-y-4 text-qdn-text-dark">
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-qdn-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="group-hover:text-qdn-primary transition-colors">Melhor preço garantido</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-qdn-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="group-hover:text-qdn-primary transition-colors">Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-qdn-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="group-hover:text-qdn-primary transition-colors">Flexibilidade nas condições</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-qdn-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="group-hover:text-qdn-primary transition-colors">Kit de boas-vindas incluído</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;