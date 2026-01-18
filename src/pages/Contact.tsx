import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const projectTypes = [
  "Residential",
  "Commercial - Restaurant/Cafe",
  "Commercial - Spa/Salon",
  "Commercial - Office",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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
              Get in Touch
            </motion.span>
            <motion.h1
              className="heading-display text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let's Create <span className="italic text-primary">Together</span>
            </motion.h1>
            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Whether you have a project in mind or simply want to explore possibilities,
              we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-sm focus:border-primary focus:outline-none"
                    >
                      <option value="">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tell Us About Your Project
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your vision, requirements, and any specific details..."
                    rows={5}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury w-full sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Visit Our Studio</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Design District, Indiranagar<br />
                      Bangalore, Karnataka 560038
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="tel:+917017186660" className="hover:text-primary transition-colors">
                        +91 70171 86660
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:Indraprasthastudio08@gmail.com" className="hover:text-primary transition-colors">
                        Indraprasthastudio08@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Clock className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                className="aspect-video rounded-sm overflow-hidden bg-secondary flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
