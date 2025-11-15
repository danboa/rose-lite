import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Clients = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const clients = [
    { name: "Blachere Illumination", color: "hsl(var(--foreground))" },
    { name: "Jeanneau", color: "hsl(var(--foreground))" },
    { name: "Tropper", color: "hsl(var(--foreground))" },
    { name: "Omega Roof Systems", color: "hsl(var(--foreground))" },
    { name: "Christian Dior", color: "hsl(var(--foreground))" },
    { name: "Alpine F1 Team", color: "hsl(var(--foreground))" },
    { name: "Ferrari", color: "hsl(var(--foreground))" },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/20">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-foreground font-light">
          Just Some of Our Satisfied Clients
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-16">
          Trusted by leading brands across Europe
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 px-4"
            >
              <span
                className="font-serif text-xl md:text-2xl font-light opacity-60 hover:opacity-100 transition-opacity text-center"
                style={{ color: client.color }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;