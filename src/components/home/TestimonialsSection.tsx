import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Tesor Designs transformed our vision into reality. Their attention to detail and understanding of our lifestyle made our home truly exceptional.",
    author: "Priya Sharma",
    location: "Bangalore",
    project: "Villa Interior",
  },
  {
    id: 2,
    quote: "Working with the Tesor team was a seamless experience. They brought creativity and professionalism to every aspect of our restaurant design.",
    author: "Rahul Mehta",
    location: "Mumbai",
    project: "Restaurant Design",
  },
  {
    id: 3,
    quote: "The level of craftsmanship and design sensibility is unmatched. Our spa has become a benchmark for luxury wellness spaces.",
    author: "Ananya Reddy",
    location: "Hyderabad",
    project: "Wellness Spa",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-luxury bg-secondary/30">
      <div className="container-luxury max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label mb-4 block">Testimonials</span>
          <h2 className="heading-section text-foreground mb-4">
            What Our <span className="italic text-primary">Clients Say</span>
          </h2>
          <div className="divider-luxury" />
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center px-4 md:px-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              </motion.div>

              <motion.p
                className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonials[current].quote}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-medium text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].location} · {testimonials[current].project}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              onClick={prev}
              className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={next}
              className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${index === current ? "bg-primary w-6" : "bg-border w-2"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
