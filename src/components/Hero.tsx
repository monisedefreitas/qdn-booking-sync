import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-quinta-das-nogueiras.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className={`${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <h1 className="mb-6 leading-tight drop-shadow-lg">
            Quinta das Nogueiras
            <br />
            <span className="text-qdn-surface block mt-2 opacity-90">Country House</span>
          </h1>
        </div>
        
        <div className={`${isLoaded ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Refúgio entre nogueiras, perto de tudo o que importa.
            <br />
            Aconchego, natureza e privacidade para dias inesquecíveis.
          </p>
        </div>
        
        <div className={`${isLoaded ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#reservas" className="btn-qdn-primary text-lg px-8 py-4 shadow-2xl">
              Reservar Agora
            </a>
            <a 
              href="#sobre" 
              className="text-white border-2 border-white/80 hover:bg-white hover:text-qdn-primary transition-all duration-300 px-8 py-4 rounded-full font-medium backdrop-blur-sm bg-white/10"
            >
              Descobrir Mais
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/15 rounded-full animate-pulse delay-700 hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1000 hidden lg:block"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center group cursor-pointer">
          <span className="text-sm mb-2 group-hover:text-white transition-colors">Descobrir</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;