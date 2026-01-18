import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const team = [
  {
    name: "Arun Kumar",
    role: "Founder & Principal Designer",
    bio: "With over 15 years of experience in luxury interiors, Arun brings a unique blend of traditional craftsmanship and contemporary design sensibility.",
  },
  {
    name: "Priya Desai",
    role: "Creative Director",
    bio: "Priya's innovative approach to spatial design has earned recognition in leading architecture and design publications.",
  },
  {
    name: "Vikram Rao",
    role: "Project Director",
    bio: "Vikram ensures flawless execution of every project, managing complex builds with precision and attention to detail.",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We pursue perfection in every detail, from concept to completion.",
  },
  {
    title: "Innovation",
    description: "Blending timeless aesthetics with cutting-edge design solutions.",
  },
  {
    title: "Integrity",
    description: "Transparent communication and honest relationships with our clients.",
  },
  {
    title: "Craftsmanship",
    description: "Celebrating the art of skilled craftsmanship in every element.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.img
          src="/images/hero/7.jpeg"
          alt="Our Design Studio"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-16">
            <motion.span
              className="text-label text-cream/70 mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="heading-display text-cream max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting <span className="italic text-primary">Extraordinary</span> Spaces
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-label mb-4 block">Our Story</span>
              <h2 className="heading-section text-foreground mb-6">
                A Legacy of <span className="italic text-primary">Design Excellence</span>
              </h2>
              <div className="space-y-4 text-body">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Founded in 2010, Tesor Designs has grown from a boutique interior design studio into one of India's most respected luxury design practices. Our journey began with a simple belief: that exceptional design has the power to transform lives.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Today, we've completed over 200 projects across residential, commercial, and hospitality sectors. Our work spans from intimate private residences to landmark commercial spaces, each reflecting our commitment to timeless elegance and functional beauty.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  With our state-of-the-art 20,000 sq ft manufacturing facility, we bring complete control over quality and craftsmanship, ensuring every piece meets our exacting standards.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative aspect-[4/5] rounded-sm overflow-hidden bg-espresso shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/hero/8.jpeg"
                >
                  <source src="/images/studio-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
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

      {/* Values Section */}
      <section className="section-luxury bg-secondary/50">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label mb-4 block">Our Values</span>
            <h2 className="heading-section text-foreground mb-4">
              What <span className="italic text-primary">Drives Us</span>
            </h2>
            <div className="divider-luxury" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <motion.span
                  className="text-5xl font-serif text-primary/30 mb-4 block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                  0{index + 1}
                </motion.span>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Video Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label mb-4 block">Behind the Scenes</span>
            <h2 className="heading-section text-foreground mb-4">
              Our Studio in <span className="italic text-primary">Action</span>
            </h2>
            <div className="divider-luxury" />
            <p className="text-body mt-6 max-w-2xl mx-auto">
              Take a glimpse into our creative process and state-of-the-art manufacturing facility where design vision becomes reality.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-sm overflow-hidden bg-espresso shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/hero/8.jpeg"
              alt="Our Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label mb-4 block">Our Team</span>
            <h2 className="heading-section text-foreground mb-4">
              Meet the <span className="italic text-primary">Visionaries</span>
            </h2>
            <div className="divider-luxury" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-serif text-3xl text-primary">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </motion.div>
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
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
            Let's Create <span className="italic text-primary">Together</span>
          </motion.h2>
          <motion.p
            className="text-cream/70 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your space? We'd love to hear about your vision and explore how we can bring it to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-luxury">
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
