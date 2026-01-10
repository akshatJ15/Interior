import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectResidence1 from "@/assets/project-residence-1.jpg";
import projectResidence2 from "@/assets/project-residence-2.jpg";
import projectSpa from "@/assets/project-spa.jpg";
import projectSalon from "@/assets/project-salon.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const categories = ["Featured", "Residences", "Spas & Salons", "Restaurants & Cafes"];

const projects = [
  {
    id: 1,
    title: "Treasures of Time",
    category: "Residential",
    image: projectResidence1,
    href: "/residences/treasures-of-time",
    tags: ["Featured", "Residences"],
  },
  {
    id: 2,
    title: "Zen Home",
    category: "Residential",
    image: projectResidence2,
    href: "/residences/zen-home",
    tags: ["Featured", "Residences"],
  },
  {
    id: 3,
    title: "Tattva Spa",
    category: "Commercial",
    image: projectSpa,
    href: "/commercial/tattva-spa",
    tags: ["Featured", "Spas & Salons"],
  },
  {
    id: 4,
    title: "Toni & Guy",
    category: "Commercial",
    image: projectSalon,
    href: "/commercial/toni-guy",
    tags: ["Featured", "Spas & Salons"],
  },
  {
    id: 5,
    title: "Saffron Restaurant",
    category: "Commercial",
    image: projectRestaurant,
    href: "/commercial/saffron-restaurant",
    tags: ["Featured", "Restaurants & Cafes"],
  },
  {
    id: 6,
    title: "White Garden",
    category: "Commercial",
    image: projectRestaurant,
    href: "/commercial/white-garden",
    tags: ["Restaurants & Cafes"],
  },
];

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(activeTab)
  );

  return (
    <section className="section-luxury bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label mb-4 block">Our Portfolio</span>
          <h2 className="heading-section text-foreground mb-4">
            Spaces We've <span className="italic text-primary">Transformed</span>
          </h2>
          <div className="divider-luxury" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`tab-luxury ${activeTab === category ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={project.href}
                className="card-luxury group relative aspect-[4/5] rounded-sm overflow-hidden block"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="text-label text-cream/70 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="heading-card text-cream group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/residences" className="btn-luxury-outline">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
