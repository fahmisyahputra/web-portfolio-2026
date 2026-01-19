import { ExperienceCard } from "@/components/ExperienceCard";
import { EXPERIENCES } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FooterSection } from "@/components/FooterSection";

export default function ExperienceSection() {
    return (
        <section id="projects" className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <ScrollReveal width="100%" className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                    My Recent Work Experience
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    A showcase of my recent work in web development, leadership, and system engineering.
                </p>
            </ScrollReveal>

            <div className="flex flex-col gap-8">
                {EXPERIENCES.map((experience, index) => (
                    <ScrollReveal key={experience.id} width="100%" delay={index * 0.1}>
                        <ExperienceCard experience={experience} />
                    </ScrollReveal>
                ))}
            </div>

            <FooterSection />
        </section>
    );
}
