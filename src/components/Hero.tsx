import heroImage from "@/assets/hero-quinta-das-nogueiras.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="mb-6 leading-tight">
          Quinta das Nogueiras
          <br />
          <span className="text-qdn-surface block mt-2">Country House</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Refúgio entre nogueiras, perto de tudo o que importa.
          <br />
          Aconchego, natureza e privacidade para dias inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#reservas" className="btn-qdn-primary text-lg px-8 py-4">
            Reservar Agora
          </a>
          <a 
            href="#sobre" 
            className="text-white border-2 border-white hover:bg-white hover:text-qdn-primary transition-all duration-300 px-8 py-4 rounded-full font-medium"
          >
            Descobrir Mais
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;