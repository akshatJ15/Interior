import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projectSpa from "@/assets/project-spa.jpg";
import projectSalon from "@/assets/project-salon.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const categories = ["All", "Spas & Salons", "Restaurants", "Cafes"];

const projects = [
  {
    id: 1,
    title: "Tattva Spa",
    category: "Spas & Salons",
    location: "Bangalore",
    description: "A serene wellness sanctuary inspired by ancient healing traditions.",
    image: projectSpa,
    slug: "tattva-spa",
  },
  {
    id: 2,
    title: "Toni & Guy",
    category: "Spas & Salons",
    location: "Mumbai",
    description: "Contemporary salon design that reflects the brand's global identity.",
    image: projectSalon,
    slug: "toni-guy",
  },
  {
    id: 3,
    title: "Diorette Salon",
    category: "Spas & Salons",
    location: "Hyderabad",
    description: "Elegant beauty salon with Parisian-inspired interiors.",
    image: projectSalon,
    slug: "diorette-salon",
  },
  {
    id: 4,
    title: "Saffron Restaurant",
    category: "Restaurants",
    location: "Belgaum",
    description: "Fine dining experience with warm, inviting ambiance.",
    image: projectRestaurant,
    slug: "saffron-restaurant",
  },
  {
    id: 5,
    title: "White Garden",
    category: "Restaurants",
    location: "Bangalore",
    description: "Heritage building transformed into an artisanal dining destination.",
    image: projectRestaurant,
    slug: "white-garden",
  },
  {
    id: 6,
    title: "Butter & Crust Cafe",
    category: "Cafes",
    location: "Chennai",
    description: "Minimalist Scandinavian-themed cafe with cozy charm.",
    image: projectSpa,
    slug: "butter-and-crust",
  },
  {
    id: 7,
    title: "Habit Salon",
    category: "Spas & Salons",
    location: "Bangalore",
    description: "Modern grooming space with industrial chic aesthetics.",
    image: projectSalon,
    slug: "habit-salon",
  },
  {
    id: 8,
    title: "Pink Verranda",
    category: "Cafes",
    location: "Bangalore",
    description: "Whimsical cafe design with Instagram-worthy interiors.",
    image: projectRestaurant,
    slug: "pink-verranda",
  },
];

const Commercial = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <motion.img
          src={projectRestaurant}
          alt="Commercial Interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-12">
            <motion.span
              className="text-label text-cream/70 mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Portfolio
            </motion.span>
            <motion.h1
              className="heading-display text-cream"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Commercial <span className="italic text-primary">Projects</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-luxury">
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`tab-luxury ${activeFilter === category ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                >
                  <Link
                    to={`/commercial/${project.slug}`}
                    className="card-luxury group block"
                  >
                    <div className="aspect-[4/5] rounded-sm overflow-hidden mb-5">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-primary">{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{project.location}</span>
                      </div>
                      <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-luxury bg-secondary/50">
        <div className="container-luxury text-center">
          <motion.h2
            className="heading-section text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Elevate Your Business Space?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create an environment that enhances your brand and delights your customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-luxury">
                Let's Discuss Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
