
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative h-[80vh] w-full">
          <Image
            src="https://placehold.co/1200x800.png"
            alt="Modern training environment"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="modern classroom training"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <strong className="text-primary">Al-Salam</strong> Training Centre
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-neutral-200">
                Your gateway to professional excellence and career advancement.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                  Who We Are
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Al-Salam Training Centre is a premier institution dedicated to providing high-quality, professional training and certification programs. We empower individuals and organizations with the skills and knowledge needed to thrive in today's competitive landscape. Our commitment to excellence ensures a transformative learning experience for every student.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                  Why Choose Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a unique blend of expert instruction, comprehensive support, and career-focused training to ensure your success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                <Card className="text-center p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                      <Users className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline mt-4">Professional Trainers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn from certified industry experts with extensive real-world experience and a passion for teaching.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
                <Card className="text-center p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                      <Award className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline mt-4">Valuable Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Gain industry-recognized certifications that validate your skills and boost your professional credibility.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="opacity-0 animate-fade-in-up animation-delay-600" style={{ animationFillMode: 'forwards' }}>
                <Card className="text-center p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                      <Briefcase className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline mt-4">Career Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We provide comprehensive career guidance and support to help you achieve your professional goals.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
