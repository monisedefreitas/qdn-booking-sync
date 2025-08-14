import { MapPin, Navigation, Smartphone } from "lucide-react";

const InteractiveMap = () => {
  const address = "Quinta das 3 Nogueiras – Casa de Campo, Rua da Campina, Vidigão Nascente 68, 2005-117, Santarém";
  const coords = "39.2369,-8.6879";
  
  const handleNavigate = () => {
    // Universal navigation link that works on all devices
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}&destination_place_id=ChIJyWEHuEmuHg0RyLEN1F3A`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleOpenMaps = () => {
    // Detect device and open appropriate app
    const userAgent = navigator.userAgent.toLowerCase();
    let url = '';
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      url = `maps://maps.apple.com/?q=${coords}`;
    } else if (userAgent.includes('android')) {
      url = `geo:${coords}?q=${coords}(Quinta das 3 Nogueiras)`;
    } else {
      url = `https://www.google.com/maps/place/${coords}`;
    }
    
    window.open(url, '_blank');
  };

  return (
    <div className="card-qdn p-0 overflow-hidden h-fit">
      <div className="bg-gradient-to-br from-qdn-primary/10 to-qdn-primary/5 p-6 border-b border-qdn-border">
        <div className="flex items-center space-x-3 mb-2">
          <MapPin className="w-6 h-6 text-qdn-primary" />
          <h3 className="text-qdn-text-dark">
            Quinta das 3 Nogueiras
          </h3>
        </div>
        <p className="text-qdn-text-muted text-sm">
          {address}
        </p>
      </div>
      
      {/* Interactive Map Embed */}
      <div className="aspect-[4/3] relative">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8!2d-8.6879!3d39.2369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE0JzEyLjgiTiA4wrA0MScxNi40Ilc!5e0!3m2!1spt!2spt!4v1645123456789!5m2!1spt!2spt`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Quinta das 3 Nogueiras"
        />
        
        {/* Navigation Overlay */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={handleNavigate}
            className="bg-qdn-white/95 backdrop-blur-sm border border-qdn-border rounded-full p-3 shadow-lg hover:bg-qdn-white transition-all group"
            title="Como chegar"
          >
            <Navigation className="w-4 h-4 text-qdn-primary group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={handleOpenMaps}
            className="bg-qdn-primary text-qdn-white rounded-full p-3 shadow-lg hover:bg-qdn-primary-hover transition-all group"
            title="Abrir no smartphone"
          >
            <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-qdn-text-muted">Coordenadas:</span>
            <span className="text-qdn-primary font-medium">{coords}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-qdn-text-muted">Código Postal:</span>
            <span className="text-qdn-primary font-medium">2005-117</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-qdn-text-muted">Clima:</span>
            <span className="text-qdn-primary font-medium">Mediterrânico continental</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-qdn-border">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-4 h-4 text-qdn-primary" />
            <span className="text-sm font-medium text-qdn-text-dark">Distâncias Principais</span>
          </div>
          <div className="space-y-1 text-xs text-qdn-text-muted">
            <div className="flex justify-between">
              <span>Lisboa:</span>
              <span>80 km (1h)</span>
            </div>
            <div className="flex justify-between">
              <span>Porto:</span>
              <span>300 km (3h)</span>
            </div>
            <div className="flex justify-between">
              <span>Coimbra:</span>
              <span>120 km (1h30)</span>
            </div>
            <div className="flex justify-between">
              <span>Óbidos:</span>
              <span>50 km (45min)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;