import { Home, Building, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    description: "Transform your home into a sanctuary of luxury and comfort with our bespoke residential design solutions.",
    href: "/residences",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description: "Create impactful commercial environments that enhance brand identity and customer experience.",
    href: "/commercial",
  },
  {
    icon: Sparkles,
    title: "Turnkey Solutions",
    description: "End-to-end design and execution services, from concept to completion, for a hassle-free experience.",
    href: "/contact",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-luxury bg-espresso">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label text-cream/60 mb-4 block">What We Do</span>
          <h2 className="heading-section text-cream mb-4">
            Our <span className="italic text-primary">Services</span>
          </h2>
          <div className="divider-luxury" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={service.href}
                className="group block p-8 border border-cream/10 rounded-sm hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-serif text-2xl text-cream mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
