import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919916940479"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
    </a>
  );
};
