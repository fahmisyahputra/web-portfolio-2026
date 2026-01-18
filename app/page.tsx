import { Hero } from "@/components/Hero";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechMarquee } from "@/components/TechMarquee";
import { ContactSection } from "@/components/ContactSection";
import { EXPERIENCES } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero />
      <TechMarquee />

      <section id="projects" className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            My Recent Work Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A showcase of my recent work in web development, leadership, and system engineering.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              ...and many more exciting projects in the works.
            </p>
            <span className="text-sm text-gray-300">Staying curious, always building.</span>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="w-full border-t border-gray-100 py-8 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Fahmi Syahputra. All rights reserved.
      </footer>
    </main>
  );
}
