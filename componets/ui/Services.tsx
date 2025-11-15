import { Sparkles, Users, Calendar, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Corporate Events",
      description: "Professional hostesses for conferences, product launches, and business galas"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Private Functions",
      description: "Elegant service for weddings, anniversaries, and exclusive private parties"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Trade Shows",
      description: "Experienced brand ambassadors and booth representatives"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "VIP Services",
      description: "Discreet, professional accompaniment for high-profile events"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 text-foreground font-light">
          Our Services
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-16">
          Tailored hospitality solutions for every occasion
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-8 border border-border hover:border-primary transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;