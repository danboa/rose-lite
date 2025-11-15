const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="font-serif text-2xl text-foreground mb-4">Roseélite</p>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Premium Hostess Agency • Middle Europe
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </a>
          </div>
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Roseélite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
