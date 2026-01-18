import { ImageCarousel } from "@/components/ImageCarousel";
import { getExperienceBySlug } from "@/lib/data";
import { ArrowLeft, Calendar, Building2, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${experience.title} - Portfolio`,
        description: experience.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="w-full max-w-4xl">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className="mb-10">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{experience.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Building2 size={18} />
                            <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{experience.period}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-12 overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                    {/* Use carousel images if available, otherwise fallback to single thumbnail */}
                    <ImageCarousel images={experience.images || [experience.image]} />
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">Overview</h2>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            {experience.description}
                        </p>

                        {/* Visual separator */}
                        <div className="h-px w-full bg-gray-100 my-8"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                            <h3 className="mb-4 text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Code2 size={20} />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
