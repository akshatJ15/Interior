import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Bangalore, Mumbai, Hyderabad, and Chennai. However, we also take on select projects across India and internationally for luxury residential and commercial spaces.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A residential project typically takes 3-6 months from concept to completion, while larger commercial projects may take 6-12 months.",
  },
  {
    question: "What is your design process?",
    answer: "Our process includes four key phases: Discovery (understanding your vision), Concept (design development), Execution (construction and installation), and Handover (final walkthrough and documentation).",
  },
  {
    question: "Do you provide turnkey solutions?",
    answer: "Yes, we offer complete turnkey solutions including design, procurement, project management, and execution. You can choose full-service or design-only packages based on your needs.",
  },
  {
    question: "What is the typical investment for a project?",
    answer: "Investment varies significantly based on project scope, materials, and customization level. We work with a wide range of budgets and will provide detailed estimates after our initial consultation.",
  },
  {
    question: "Do you have an in-house manufacturing facility?",
    answer: "Yes, we have a 20,000 sq ft state-of-the-art factory where we manufacture custom furniture, joinery, and fixtures. This allows us to maintain quality control and deliver exceptional craftsmanship.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-luxury bg-secondary/30">
      <div className="container-luxury max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-label mb-4 block">FAQ</span>
          <h2 className="heading-section text-foreground mb-4">
            Frequently Asked <span className="italic text-primary">Questions</span>
          </h2>
          <div className="divider-luxury" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-sm px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
