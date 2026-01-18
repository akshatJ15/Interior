import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Treasures of Time",
    location: "Bangalore",
    area: "4,500 sq ft",
    description: "A contemporary residence that seamlessly blends modern luxury with timeless elegance.",
    image: "/images/residences/1.jpeg",
    slug: "treasures-of-time",
  },
  {
    id: 2,
    title: "Zen Home",
    location: "Bangalore",
    area: "3,200 sq ft",
    description: "Japandi-inspired interiors that create a serene and harmonious living environment.",
    image: "/images/residences/2.jpeg",
    slug: "zen-home",
  },
  {
    id: 3,
    title: "Embassy Lake Terraces",
    location: "Bangalore",
    area: "5,800 sq ft",
    description: "Luxury lakeside residence with panoramic views and bespoke interiors.",
    image: "/images/residences/3.jpeg",
    slug: "embassy-lake-terraces",
  },
  {
    id: 4,
    title: "Voyager's Retreat",
    location: "Chennai",
    area: "4,000 sq ft",
    description: "A travel-inspired home that tells stories from around the world.",
    image: "/images/residences/4.jpeg",
    slug: "voyagers-retreat",
  },
  {
    id: 5,
    title: "Olavu",
    location: "Bangalore",
    area: "3,500 sq ft",
    description: "Minimalist luxury with warm textures and curated art collection.",
    image: "/images/residences/5.jpeg",
    slug: "olavu",
  },
  {
    id: 6,
    title: "Kaalam",
    location: "Mumbai",
    area: "4,200 sq ft",
    description: "Heritage-inspired design with contemporary sensibilities.",
    image: "/images/residences/6.jpeg",
    slug: "kaalam",
  },
];

const Residences = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <motion.img
          src="/images/hero/5.jpeg"
          alt="Residential Interior"
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
              Residential <span className="italic text-primary">Projects</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/residences/${project.slug}`}
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
                      <span className="text-xs text-muted-foreground">{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{project.area}</span>
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
          </div>
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
            Have a Residential Project in Mind?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can transform your home into a sanctuary of luxury and comfort.
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

export default Residences;
