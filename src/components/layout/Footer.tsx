import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Studio", href: "/studio" },
    { label: "Our Factory", href: "/factory" },
    { label: "Careers", href: "/careers" },
  ],
  projects: [
    { label: "Residences", href: "/residences" },
    { label: "Spas & Salons", href: "/commercial?category=spa" },
    { label: "Restaurants", href: "/commercial?category=restaurant" },
    { label: "Cafes", href: "/commercial?category=cafe" },
  ],
  resources: [
    { label: "Design Ideas", href: "/design-ideas" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/indraprastha_design_studio?utm_source=qr&igsh=aGhiMHRwbHJ3azNu", label: "Instagram" },
  // { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  // { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpeg"
                alt="TESOR Designs"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-sm">
              Crafting luxurious interiors that blend timeless elegance with modern functionality.
              Every space tells a story of refined taste and attention to detail.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Design District, Bangalore, India 560001</span>
              </li>
              <li>
                <a
                  href="tel:+917017186660"
                  className="flex items-center gap-3 text-sm text-cream/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 70171 86660</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Indraprasthastudio08@gmail.com"
                  className="flex items-center gap-3 text-sm text-cream/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Indraprasthastudio08@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Tesor Designs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-cream/50 hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-cream/50 hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
