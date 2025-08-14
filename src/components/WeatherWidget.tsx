import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Thermometer, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  icon: string;
}

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulated weather data for Santarém region
  useEffect(() => {
    const fetchWeather = () => {
      // Simulate API call with realistic data for Santarém
      setTimeout(() => {
        const conditions = [
          { condition: "Ensolarado", icon: "sun", temp: 22 },
          { condition: "Parcialmente Nublado", icon: "cloud", temp: 18 },
          { condition: "Nublado", icon: "cloud", temp: 16 },
          { condition: "Chuvisco", icon: "rain", temp: 14 }
        ];
        
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        
        setWeatherData({
          temperature: randomCondition.temp,
          condition: randomCondition.condition,
          humidity: Math.floor(Math.random() * 30) + 60, // 60-90%
          windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
          windDirection: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)],
          precipitation: Math.floor(Math.random() * 20), // 0-20%
          icon: randomCondition.icon
        });
        setLoading(false);
      }, 1000);
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "sun":
        return <Sun className="w-4 h-4 text-yellow-500" />;
      case "cloud":
        return <Cloud className="w-4 h-4 text-gray-500" />;
      case "rain":
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      case "snow":
        return <CloudSnow className="w-4 h-4 text-blue-300" />;
      default:
        return <Sun className="w-4 h-4 text-yellow-500" />;
    }
  };

  if (loading || !weatherData) {
    return (
      <div className="relative">
        <button className="flex items-center space-x-2 px-3 py-2 bg-qdn-surface rounded-lg border border-qdn-border">
          <Thermometer className="w-4 h-4 text-qdn-primary animate-pulse" />
          <span className="text-sm text-qdn-text-muted">--°C</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-qdn-surface rounded-lg border border-qdn-border hover:bg-qdn-white transition-colors"
      >
        {getWeatherIcon(weatherData.icon)}
        <span className="text-sm font-medium text-qdn-text-dark">
          {weatherData.temperature}°C
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className={cn(
            "absolute top-full right-0 mt-2 w-72 bg-qdn-white rounded-xl shadow-2xl border border-qdn-border z-50",
            "transform transition-all duration-200 ease-out",
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-qdn-text-dark">Clima em Santarém</h3>
                <div className="flex items-center space-x-2">
                  {getWeatherIcon(weatherData.icon)}
                  <span className="text-2xl font-bold text-qdn-text-dark">
                    {weatherData.temperature}°C
                  </span>
                </div>
              </div>

              {/* Condition */}
              <p className="text-qdn-text-muted mb-6 text-center">
                {weatherData.condition}
              </p>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-qdn-surface rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Wind className="w-4 h-4 text-qdn-primary" />
                    <span className="text-xs font-medium text-qdn-text-muted">Vento</span>
                  </div>
                  <p className="text-sm font-semibold text-qdn-text-dark">
                    {weatherData.windSpeed} km/h {weatherData.windDirection}
                  </p>
                </div>

                <div className="bg-qdn-surface rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Droplets className="w-4 h-4 text-qdn-primary" />
                    <span className="text-xs font-medium text-qdn-text-muted">Humidade</span>
                  </div>
                  <p className="text-sm font-semibold text-qdn-text-dark">
                    {weatherData.humidity}%
                  </p>
                </div>

                <div className="bg-qdn-surface rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <CloudRain className="w-4 h-4 text-qdn-primary" />
                    <span className="text-xs font-medium text-qdn-text-muted">Precipitação</span>
                  </div>
                  <p className="text-sm font-semibold text-qdn-text-dark">
                    {weatherData.precipitation}%
                  </p>
                </div>

                <div className="bg-qdn-surface rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Eye className="w-4 h-4 text-qdn-primary" />
                    <span className="text-xs font-medium text-qdn-text-muted">Visibilidade</span>
                  </div>
                  <p className="text-sm font-semibold text-qdn-text-dark">
                    Boa
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-qdn-border">
                <p className="text-xs text-qdn-text-muted text-center">
                  Última atualização: {new Date().toLocaleTimeString('pt-PT', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;