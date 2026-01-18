import { Lightbulb, Palette, Hammer, Home } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "We begin by understanding your vision, lifestyle, and aspirations through in-depth consultations.",
  },
  {
    icon: Palette,
    title: "Concept",
    description: "Our designers craft bespoke concepts with detailed mood boards, 3D visualizations, and material palettes.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "Expert craftsmen bring designs to life with precision, using premium materials and meticulous attention.",
  },
  {
    icon: Home,
    title: "Handover",
    description: "We deliver a fully realized space that exceeds expectations, ready for you to create memories.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-luxury">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label mb-4 block">Our Process</span>
            <h2 className="heading-section text-foreground mb-6">
              How We <span className="italic text-primary">Work</span>
            </h2>
            <p className="text-body mb-10 max-w-lg">
              From initial concept to final handover, we guide you through every step of your interior design journey with transparency and expertise.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex gap-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-primary">0{index + 1}</span>
                      <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="aspect-[4/5] rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/hero/3.jpeg"
                alt="Our Design Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-sm -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
