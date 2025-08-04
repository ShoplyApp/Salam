import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users, ShieldCheck } from "lucide-react";
import { CourseCard } from "@/components/course-card";

export default function Home() {
  const courses = [
    {
      title: "CompTIA Security+",
      icon: ShieldCheck,
      description:
        "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. This course covers core cybersecurity knowledge and skills in risk assessment, incident response, forensics, and more.",
      duration: "2 Weeks",
      mode: "In-person",
      startDate: "New batches every month",
      registrationLink: "https://wa.me/97317686200",
      image: {
        src: "https://i.imgur.com/8Q6Xh2e.jpeg",
        aiHint: "cybersecurity training network",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* ✅ HERO SECTION WITH BACKGROUND IMAGE */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="https://i.imgur.com/Yrxki4m.png"
            alt="Background"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-foreground p-4">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <strong className="text-primary">Al-Salam</strong>
                <span className="text-white"> Training Centre</span>
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

        {/* ✅ ABOUT SECTION */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div
                className="space-y-2 opacity-0 animate-fade-in-up animation-delay-200"
                style={{ animationFillMode: "forwards" }}
              >
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

        {/* ✅ COURSES SECTION */}
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background/80">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                  Our Courses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our range of professional courses designed to advance your career.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up animation-delay-400"
                  style={{ animationFillMode: "forwards" }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ✅ WHY CHOOSE US SECTION */}
        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                  Why Choose Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a unique blend of expert instruction, comprehensive support, and career-focused training to ensure your success.
                </p>
              </div>
            </div>

            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Professional Trainers",
                  content:
                    "Learn from certified industry experts with extensive real-world experience and a passion for teaching.",
                },
                {
                  icon: Award,
                  title: "Valuable Certifications",
                  content:
                    "Gain industry-recognized certifications that validate your skills and boost your professional credibility.",
                },
                {
                  icon: Briefcase,
                  title: "Career Support",
                  content:
                    "We provide comprehensive career guidance and support to help you achieve your professional goals.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`opacity-0 animate-fade-in-up animation-delay-${200 + idx * 200}`}
                  style={{ animationFillMode: "forwards" }}
                >
                  <Card className="text-center p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
