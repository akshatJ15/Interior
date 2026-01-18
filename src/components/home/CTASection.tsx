import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/images/hero/4.jpeg"
          alt="Interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
      </motion.div>

      {/* Content */}
      <div className="relative container-luxury text-center">
        <motion.h2
          className="heading-section text-cream mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform <span className="italic text-primary">Your Space?</span>
        </motion.h2>
        <motion.p
          className="text-cream/70 text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's collaborate to create an interior that reflects your vision and exceeds your expectations.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn-luxury">
              Start Your Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/residences"
              className="btn-luxury-outline border-cream text-cream hover:bg-cream hover:text-espresso"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
