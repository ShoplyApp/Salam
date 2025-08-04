
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Home, Mail, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
};

export function Header() {
  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image
            src="https://storage.googleapis.com/source-নাট্যদল/85a3c3dd-4519-4676-a72a-4a6f2795861b"
            alt="Al-Salam Training Centre Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            data-ai-hint="logo company"
          />
          <span className="text-lg font-headline">
            <strong className="font-bold text-primary">Al-Salam</strong>
            <span className="font-normal text-foreground"> Training Centre</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-4 text-lg">
                  <Image
                    src="https://storage.googleapis.com/source-নাট্যদল/85a3c3dd-4519-4676-a72a-4a6f2795861b"
                    alt="Al-Salam Training Centre Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                    data-ai-hint="logo company"
                  />
                  <span className="font-headline">
                    <strong className="font-bold text-primary">Al-Salam</strong>
                    <span className="font-normal text-foreground"> Training Centre</span>
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} className="flex items-center gap-4 text-xl">
                    <link.icon className="h-6 w-6" />
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
