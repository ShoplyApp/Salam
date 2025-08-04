import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface ContactCardProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | ((props: any) => JSX.Element);
  title: string;
  value: string;
  href: string;
}

export function ContactCard({ Icon, title, value, href }: ContactCardProps) {
  const isInternalLink = href.startsWith("#");

  if (isInternalLink) {
    return (
      <a href={href} className="h-full">
        <Card className="h-full p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
            <Icon className="h-8 w-8" />
          </div>
          <CardContent className="p-0">
            <h3 className="text-xl font-semibold font-headline">{title}</h3>
            <p className="text-muted-foreground break-all">{value}</p>
          </CardContent>
        </Card>
      </a>
    );
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="h-full">
      <Card className="h-full p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
        <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
          <Icon className="h-8 w-8" />
        </div>
        <CardContent className="p-0">
          <h3 className="text-xl font-semibold font-headline">{title}</h3>
          <p className="text-muted-foreground break-all">{value}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
