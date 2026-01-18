import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Creating a Cozy Living Room",
    excerpt: "Discover how to transform your living space into a warm and inviting sanctuary...",
    category: "Interior Tips",
    date: "January 5, 2026",
    image: "/images/blog/1.jpeg",
    slug: "cozy-living-room-tips",
  },
  {
    id: 2,
    title: "The Art of Japandi Design",
    excerpt: "Explore the beautiful fusion of Japanese minimalism and Scandinavian functionality...",
    category: "Design Trends",
    date: "December 28, 2025",
    image: "/images/blog/2.jpeg",
    slug: "art-of-japandi-design",
  },
  {
    id: 3,
    title: "Choosing the Perfect Color Palette",
    excerpt: "A comprehensive guide to selecting colors that create the right mood for your space...",
    category: "Color Theory",
    date: "December 15, 2025",
    image: "/images/blog/3.jpeg",
    slug: "choosing-color-palette",
  },
];

const Blog = () => {
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
              Our Blog
            </motion.span>
            <motion.h1
              className="heading-display text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Design <span className="italic text-primary">Insights</span>
            </motion.h1>
            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Stay inspired with the latest trends, tips, and stories from the world of interior design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="card-luxury group block"
                >
                  <div className="aspect-[3/2] rounded-sm overflow-hidden mb-5">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-primary">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
