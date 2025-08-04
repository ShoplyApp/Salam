import { CourseCard } from "@/components/course-card";
import { ShieldCheck } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      title: "CompTIA Security+",
      icon: ShieldCheck,
      description: "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. This course covers core cybersecurity knowledge and skills in risk assessment, incident response, forensics, and more.",
      duration: "6 Weeks",
      mode: "Online / In-person",
      startDate: "New batches every month",
      registrationLink: "https://wa.me/97317686200",
      image: {
        src: "https://placehold.co/600x400.png",
        aiHint: "cybersecurity network"
      }
    },
    // Future courses can be added here
  ];

  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Our Courses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Explore our range of professional courses designed to advance your career.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
