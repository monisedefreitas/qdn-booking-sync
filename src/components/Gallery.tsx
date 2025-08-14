import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - in production these would be actual photos
  const images = [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      alt: "Exterior da Quinta das Nogueiras",
      category: "Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      alt: "Sala de estar",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      alt: "Quarto principal",
      category: "Quartos"
    },
    {
      src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
      alt: "Cozinha equipada",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      alt: "Jardim e área externa",
      category: "Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      alt: "Casa de banho",
      category: "Interior"
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-24 bg-qdn-surface">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="mb-6 text-qdn-text-dark">
            Galeria de Fotos
          </h2>
          <p className="text-qdn-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Descubra os espaços acolhedores e as paisagens deslumbrantes 
            que fazem da Quinta das Nogueiras um destino único.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 fade-in-up stagger-${Math.min(index + 1, 6)}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                <span className="bg-qdn-white/95 backdrop-blur-sm text-qdn-text-dark px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {image.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform -translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 bg-qdn-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-qdn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-qdn-surface transition-colors"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-qdn-surface transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-qdn-surface transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium">{images[selectedImage].alt}</p>
              <p className="text-sm opacity-75">{selectedImage + 1} de {images.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;