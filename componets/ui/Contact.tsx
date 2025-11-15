import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Phone is required" }).max(20),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-foreground font-light">
            Get In Touch
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Let us elevate your next event with exceptional hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-serif text-xl mb-2 text-foreground">Email</h3>
            <p className="font-sans text-muted-foreground">info@roseelite.eu</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-serif text-xl mb-2 text-foreground">Phone</h3>
            <p className="font-sans text-muted-foreground">+43 XXX XXX XXXX</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-serif text-xl mb-2 text-foreground">Location</h3>
            <p className="font-sans text-muted-foreground">Vienna, Austria</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div>
            <Label htmlFor="name" className="font-sans text-foreground">Name *</Label>
            <Input
              id="name"
              {...register("name")}
              className="mt-2 bg-background border-border rounded-none"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="font-sans text-foreground">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-2 bg-background border-border rounded-none"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="font-sans text-foreground">Phone *</Label>
            <Input
              id="phone"
              {...register("phone")}
              className="mt-2 bg-background border-border rounded-none"
              placeholder="+43 XXX XXX XXXX"
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="font-sans text-foreground">Message *</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="mt-2 bg-background border-border rounded-none min-h-[150px]"
              placeholder="Tell us about your event..."
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-sans font-medium rounded-none"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;