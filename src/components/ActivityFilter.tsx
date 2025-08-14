import { useState } from "react";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityFilterProps {
  selectedFilters: string[];
  onFiltersChange: (filters: string[]) => void;
  className?: string;
}

const filterOptions = [
  { id: "gastronomia", label: "Gastronomia", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { id: "natureza", label: "Natureza", color: "bg-green-100 text-green-700 border-green-200" },
  { id: "cultura", label: "Cultura", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { id: "desporto", label: "Desporto", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { id: "eventos", label: "Eventos", color: "bg-pink-100 text-pink-700 border-pink-200" },
];

export const ActivityFilter = ({ selectedFilters, onFiltersChange, className }: ActivityFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (filterId: string) => {
    if (selectedFilters.includes(filterId)) {
      onFiltersChange(selectedFilters.filter(f => f !== filterId));
    } else {
      onFiltersChange([...selectedFilters, filterId]);
    }
  };

  const clearAllFilters = () => {
    onFiltersChange([]);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-qdn-primary" />
          <span className="text-sm font-medium text-qdn-text-dark">Filtrar por categoria:</span>
        </div>
        {selectedFilters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-qdn-text-muted hover:text-qdn-primary transition-colors flex items-center space-x-1"
          >
            <X className="w-3 h-3" />
            <span>Limpar tudo</span>
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => {
          const isSelected = selectedFilters.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggleFilter(option.id)}
              className={cn(
                "px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200",
                isSelected 
                  ? `${option.color} scale-105 shadow-sm` 
                  : "bg-qdn-surface border-qdn-border text-qdn-text-muted hover:border-qdn-primary hover:text-qdn-primary"
              )}
            >
              {option.label}
              {isSelected && <span className="ml-1">✓</span>}
            </button>
          );
        })}
      </div>

      {selectedFilters.length > 0 && (
        <div className="mt-3 text-xs text-qdn-text-muted">
          {selectedFilters.length === 1 ? "1 categoria selecionada" : `${selectedFilters.length} categorias selecionadas`}
        </div>
      )}
    </div>
  );
};