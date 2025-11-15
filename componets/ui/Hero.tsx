import { Button } from "@/components/ui/button";
import hostessesImage from "@/assets/hostesses-hero.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 animate-fade-in relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.6) 0%, hsl(var(--background) / 0.4) 30%, hsl(var(--background) / 0.3) 50%, hsl(var(--background) / 0.4) 70%, hsl(var(--background) / 0.6) 100%), url(${hostessesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground font-light tracking-wide">
          Elegance Meets Excellence
        </h1>
        <p className="font-sans text-xl md:text-2xl max-w-2xl mb-12 text-muted-foreground font-light">
          Premium hostess services for exclusive events across Middle Europe
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-sans font-medium rounded-none transition-all"
          >
            For Clients
          </Button>
          <Button 
            onClick={() => scrollToSection("hostesses")}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-sans font-medium rounded-none transition-all"
          >
            For Hostesses
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;