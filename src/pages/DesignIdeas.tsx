import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor"];

const ideas = [
  {
    id: 1,
    title: "Warm Minimalist Living Room",
    category: "Living Room",
    image: "/images/design-ideas/1.jpeg",
  },
  {
    id: 2,
    title: "Japandi Bedroom Retreat",
    category: "Bedroom",
    image: "/images/design-ideas/2.jpeg",
  },
  {
    id: 3,
    title: "Modern Kitchen Design",
    category: "Kitchen",
    image: "/images/design-ideas/3.jpeg",
  },
  {
    id: 4,
    title: "Spa-Inspired Bathroom",
    category: "Bathroom",
    image: "/images/design-ideas/4.jpeg",
  },
  {
    id: 5,
    title: "Contemporary Living Space",
    category: "Living Room",
    image: "/images/design-ideas/5.jpeg",
  },
  {
    id: 6,
    title: "Elegant Master Suite",
    category: "Bedroom",
    image: "/images/design-ideas/6.jpeg",
  },
];

const DesignIdeas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-luxury bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-label mb-4 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Inspiration
            </motion.span>
            <motion.h1
              className="heading-display text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Design <span className="italic text-primary">Ideas</span>
            </motion.h1>
            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore our curated collection of design inspirations to spark ideas for your own space.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                className="card-luxury group relative aspect-[4/5] rounded-sm overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="text-label text-cream/70 mb-2 block">
                    {idea.category}
                  </span>
                  <h3 className="heading-card text-cream group-hover:text-primary transition-colors">
                    {idea.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-luxury bg-espresso">
        <div className="container-luxury text-center">
          <motion.h2
            className="heading-section text-cream mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Bring These Ideas to Life?
          </motion.h2>
          <motion.p
            className="text-cream/70 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let our designers help you create a space that's uniquely yours.
          </motion.p>
          <motion.div
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DesignIdeas;
