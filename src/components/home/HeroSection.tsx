import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero/1.jpeg",
    title: "Luxury in",
    highlight: "every detail",
    subtitle: "Transforming spaces into extraordinary experiences through thoughtful design and impeccable craftsmanship.",
  },
  {
    image: "/images/hero/2.jpeg",
    title: "Where elegance",
    highlight: "meets comfort",
    subtitle: "Creating timeless interiors that reflect your unique personality and lifestyle.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 8, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container-luxury flex items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1
            key={currentSlide + "title"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading-display text-cream mb-6"
          >
            {slides[currentSlide].title}{" "}
            <span className="italic text-primary">{slides[currentSlide].highlight}</span>
          </motion.h1>
          <motion.p
            key={currentSlide + "subtitle"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-cream/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-luxury">
              Start a Project
            </Link>
            <Link to="/residences" className="btn-luxury-outline border-cream text-cream hover:bg-cream hover:text-espresso">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-6 lg:right-10 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-cream/30 flex items-center justify-center text-cream/70 hover:bg-cream hover:text-espresso transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-cream/30 flex items-center justify-center text-cream/70 hover:bg-cream hover:text-espresso transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all ${index === currentSlide ? "bg-primary" : "bg-cream/30"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
