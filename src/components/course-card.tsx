import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Laptop, Users, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  image: {
    src: string;
    aiHint: string;
  };
}

export function CourseCard({ title, description, duration, mode, startDate, registrationLink, image }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-xl w-full flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <Image
          src={image.src}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover"
          data-ai-hint={image.aiHint}
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:w-2/3">
        <div>
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-bold font-headline mb-2">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <p className="text-muted-foreground mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span><span className="font-semibold">Duration:</span> {duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-primary" />
                <span><span className="font-semibold">Mode:</span> {mode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span><span className="font-semibold">Start Date:</span> {startDate}</span>
              </div>
            </div>
          </CardContent>
        </div>
        <CardFooter className="p-0 mt-6">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
