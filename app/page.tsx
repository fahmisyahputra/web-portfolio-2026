import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import dynamic from "next/dynamic";

const TechMarquee = dynamic(() => import("@/components/TechMarquee").then(mod => mod.TechMarquee));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero />

      <ScrollReveal width="100%">
        <TechMarquee />
      </ScrollReveal>

      <ExperienceSection />

      <ScrollReveal width="100%">
        <ContactSection />
      </ScrollReveal>

      <footer className="w-full border-t border-gray-100 py-8 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Fahmi Syahputra. All rights reserved.
      </footer>
    </main>
  );
}
