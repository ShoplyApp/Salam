import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { School, Phone, Mail, MapPin, Instagram, Linkedin, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <School className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">Al-Salam Training Hub</span>
            </Link>
            <p className="text-sm">
              Empowering professionals through high-quality training and certification.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+97317686200" className="hover:text-primary transition-colors">+973 1768 6200</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="https://alsalamtraining.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">alsalamtraining.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bahrain</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline text-foreground mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Stay updated with our latest courses and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} Al-Salam Training Centre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/97317686200" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6 hover:text-primary transition-colors"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="https://www.instagram.com/alsalam.training.bh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/al-salam-training-centre" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
            <a href="#" aria-label="TikTok">
              <Music className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
