import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ForHostesses = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const benefits = [
    "Flexible scheduling around your commitments",
    "Competitive compensation and bonus opportunities",
    "Work at prestigious events and venues",
    "Professional development and training",
    "Safe, supportive work environment",
    "Networking with industry professionals"
  ];

  return (
    <section id="hostesses" ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 text-foreground font-light">
          Join Our Team
        </h2>
        <p className="font-sans text-lg text-center text-muted-foreground mb-16">
          Become part of Middle Europe's most respected hostess agency
        </p>
        
        <div className="bg-card border border-border p-10 mb-8">
          <h3 className="font-serif text-3xl mb-8 text-foreground text-center">
            Why Work With Roseélite?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-muted-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-sans font-medium rounded-none"
          >
            Apply Now
          </Button>
          <p className="font-sans text-sm text-muted-foreground mt-4">
            We're always looking for professional, elegant, and reliable individuals
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForHostesses;
