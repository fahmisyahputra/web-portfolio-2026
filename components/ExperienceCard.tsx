"use client";

import { Experience } from "@/lib/data";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Link href={`/experience/${experience.slug}`} className="group block w-full">
            <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex flex-col md:flex-row w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
                {/* Left: Image Area */}
                <div className="md:w-5/12 h-64 md:h-auto relative bg-gray-50 flex items-center justify-center overflow-hidden">
                    {experience.image && !experience.image.includes('thumb.jpg') ? ( // Simple check, ideally use error handling
                        <Image
                            src={experience.image}
                            alt={experience.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        // Fallback / Placeholder style for demo
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                            <div className="text-gray-300">
                                <ImageIcon size={48} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Content Area */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {experience.title}
                            </h3>
                            <p className="text-lg font-medium text-gray-500">{experience.company}</p>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {experience.period}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {experience.tech.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-8 right-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
                        <ArrowUpRight className="text-blue-600" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
