import Navigation from "../componets/ui/Navigation";
import Hero from "../componets/ui/Hero";
import About from "../componets/ui/About";
import Services from "../componets/ui/Services";
import Clients from "../componets/ui/Clients";
import ForHostesses from "../componets/ui/ForHostesses";
import Contact from "../componets/ui/Contact";
import Footer from "../componets/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Clients />
      <ForHostesses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
