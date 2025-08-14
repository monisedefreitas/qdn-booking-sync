import { useState } from "react";
import { Calendar, Thermometer, Camera, Package, Sun, Cloud, CloudRain, Snowflake } from "lucide-react";
import { useSeasonDetection } from "@/hooks/useSeasonDetection";
import { ActivityFilter } from "./ActivityFilter";

interface SeasonalActivitiesGuideProps {
  checkIn: string;
  checkOut: string;
}

const SeasonalActivitiesGuide = ({ checkIn, checkOut }: SeasonalActivitiesGuideProps) => {
  const seasonInfo = useSeasonDetection(checkIn, checkOut);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const getWeatherIcon = (temp: string) => {
    const temperature = parseInt(temp);
    if (temperature >= 25) return <Sun className="w-6 h-6 text-yellow-500" />;
    if (temperature >= 15) return <Cloud className="w-6 h-6 text-gray-500" />;
    if (temperature >= 5) return <CloudRain className="w-6 h-6 text-blue-500" />;
    return <Snowflake className="w-6 h-6 text-blue-300" />;
  };

  if (!seasonInfo) {
    return (
      <div className="card-qdn text-center">
        <Calendar className="w-12 h-12 text-qdn-muted mx-auto mb-4" />
        <h3 className="text-qdn-text-dark mb-2">Atividades por Estação</h3>
        <p className="text-qdn-text-muted">
          Descubra as melhores atividades para cada época do ano na região de Santarém.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Season Header */}
      <div className="bg-gradient-to-br from-qdn-primary/10 to-qdn-primary/5 rounded-2xl p-6 border border-qdn-primary/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-qdn-primary/20 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-qdn-primary" />
          </div>
          <div>
            <h3 className="text-qdn-text-dark text-xl font-semibold">
              Guia de {seasonInfo.season}
            </h3>
            <p className="text-qdn-text-muted text-sm">
              {seasonInfo.dates.checkIn} até {seasonInfo.dates.checkOut}
            </p>
          </div>
        </div>
        <p className="text-qdn-text-muted leading-relaxed">
          {seasonInfo.description}
        </p>
      </div>

      <ActivityFilter 
        selectedFilters={selectedFilters} 
        onFiltersChange={setSelectedFilters}
        className="mb-6"
      />

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Activities */}
        <div className="card-qdn">
          <div className="flex items-center space-x-3 mb-4">
            <Camera className="w-5 h-5 text-qdn-primary" />
            <h4 className="font-semibold text-qdn-text-dark">Atividades Recomendadas</h4>
          </div>
          <div className="space-y-2">
            {seasonInfo.activities
              .filter(activity => {
                if (selectedFilters.length === 0) return true;
                return selectedFilters.some(filter => 
                  activity.toLowerCase().includes(filter) ||
                  (filter === "gastronomia" && (activity.includes("gastronómica") || activity.includes("vinho") || activity.includes("culinár"))) ||
                  (filter === "natureza" && (activity.includes("caminhada") || activity.includes("bicicleta") || activity.includes("observação") || activity.includes("jardins"))) ||
                  (filter === "cultura" && (activity.includes("museus") || activity.includes("património") || activity.includes("história") || activity.includes("mosteiro"))) ||
                  (filter === "desporto" && (activity.includes("bicicleta") || activity.includes("caminhada") || activity.includes("ativ"))) ||
                  (filter === "eventos" && (activity.includes("festival") || activity.includes("feira") || activity.includes("evento")))
                );
              })
              .map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-qdn-surface transition-colors">
                  <div className="w-2 h-2 bg-qdn-primary rounded-full"></div>
                  <span className="text-qdn-text-muted">{activity}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Weather & Events */}
        <div className="space-y-4">
          {/* Weather Widget */}
          <div className="card-qdn-subtle">
            <div className="flex items-center space-x-3 mb-3">
              <Thermometer className="w-5 h-5 text-qdn-primary" />
              <h4 className="font-semibold text-qdn-text-dark text-sm">Temperatura Esperada</h4>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="relative">
                  {getWeatherIcon(seasonInfo.temperature.avg)}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-qdn-primary/20 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-qdn-primary">
                  {seasonInfo.temperature.avg}°C
                </div>
              </div>
              <div className="text-xs text-qdn-text-muted bg-qdn-white p-2 rounded-lg">
                Mín: {seasonInfo.temperature.min}°C | Máx: {seasonInfo.temperature.max}°C
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="card-qdn-subtle">
            <div className="flex items-center space-x-3 mb-3">
              <Calendar className="w-5 h-5 text-qdn-primary" />
              <h4 className="font-semibold text-qdn-text-dark text-sm">Eventos da Época</h4>
            </div>
            <div className="space-y-2">
              {seasonInfo.events.map((event, index) => (
                <div key={index} className="text-xs text-qdn-text-muted p-2 bg-qdn-white rounded border border-qdn-border">
                  {event}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clothing Tips */}
      <div className="card-qdn bg-gradient-to-br from-qdn-surface to-qdn-white">
        <div className="flex items-center space-x-3 mb-4">
          <Package className="w-5 h-5 text-qdn-primary" />
          <h4 className="font-semibold text-qdn-text-dark">O que trazer</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {seasonInfo.clothing.map((item, index) => (
            <div key={index} className="chip-qdn text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalActivitiesGuide;