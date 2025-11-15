import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-12 text-foreground font-light">
          Who We Are
        </h2>
        <div className="space-y-8 text-center">
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            Roseélite is Middle Europe's premier hostess agency, connecting discerning clients 
            with exceptional hospitality professionals.
          </p>
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            We specialize in providing elegant, professional hostesses for corporate events, 
            private gatherings, trade shows, and exclusive occasions across Austria, Germany, 
            Switzerland, and neighboring regions.
          </p>
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our commitment to excellence ensures every event is elevated with grace, 
            sophistication, and impeccable service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
