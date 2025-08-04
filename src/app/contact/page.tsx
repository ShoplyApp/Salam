import Image from "next/image";
import { ContactCard } from "@/components/contact-card";
import { Phone, Globe, Instagram, Linkedin, Music } from "lucide-react";

export default function ContactPage() {
  const contactOptions = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      value: "+973 1768 6200",
      href: "tel:+97317686200",
    },
    {
      icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>,
      title: "WhatsApp Chat",
      value: "wa.me/97317686200",
      href: "https://wa.me/97317686200",
    },
    {
      icon: Globe,
      title: "Website",
      value: "alsalamtraining.com",
      href: "https://alsalamtraining.com/",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@alsalam.training.bh",
      href: "https://www.instagram.com/alsalam.training.bh/",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Al-Salam Training Centre",
      href: "https://www.linkedin.com/company/al-salam-training-centre/",
    },
    {
      icon: Music,
      title: "TikTok",
      value: "Follow us!",
      href: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          We're here to help. Contact us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactOptions.map((option, index) => (
           <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: 'forwards' }}>
            <ContactCard
              Icon={option.icon}
              title={option.title}
              value={option.value}
              href={option.href}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold font-headline text-center mb-8 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>Our Location</h2>
        <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Al-Salam Training Centre Location"
            width={1200}
            height={600}
            className="w-full"
            data-ai-hint="city map"
          />
        </div>
      </div>
    </div>
  );
}
