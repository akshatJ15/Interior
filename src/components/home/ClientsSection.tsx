const clients = [
  "Toni & Guy",
  "Manipal Hospitals",
  "Tattva Spa",
  "Embassy Group",
  "Prestige Estates",
  "Brigade Group",
  "Godrej Properties",
  "Marriott",
];

const awards = [
  { year: "2024", title: "Best Interior Design Studio" },
  { year: "2023", title: "Excellence in Commercial Design" },
  { year: "2022", title: "Luxury Residential Award" },
];

export const ClientsSection = () => {
  return (
    <section className="section-luxury">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-label mb-4 block">Our Clients</span>
          <h2 className="heading-section text-foreground mb-4">
            Trusted by <span className="italic text-primary">Leading Brands</span>
          </h2>
          <div className="divider-luxury" />
        </div>

        {/* Client Logos Marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 py-6"
              >
                <span className="font-serif text-2xl text-muted-foreground/50 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        {/* <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <span className="text-label">Awards & Recognition</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex items-center gap-4 px-6 py-4 border border-border rounded-sm"
              >
                <span className="font-serif text-3xl text-primary">{award.year}</span>
                <div className="h-8 w-px bg-border" />
                <span className="text-sm text-muted-foreground">{award.title}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
