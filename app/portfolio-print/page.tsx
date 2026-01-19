"use client";

import { EXPERIENCES, PERSONAL_INFO, SKILLS } from "@/lib/data";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function PrintablePortfolio() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-0 md:p-8 print:p-0 print:bg-white flex justify-center items-start overflow-hidden">
            {/* Scaled Wrapper for Mobile */}
            <div className="w-full h-full flex justify-center origin-top transform scale-[0.45] md:transform-none md:scale-100">
                {/* A4 Container */}
                <main className="w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none print:w-full print:m-0 p-[15mm] text-gray-900 font-sans leading-relaxed relative mx-auto my-0">

                    {/* Header */}
                    <header className="border-b-2 border-gray-900 pb-6 mb-8 flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight uppercase mb-2">{PERSONAL_INFO.name}</h1>
                            <p className="text-xl font-medium text-gray-600">Fullstack Engineer & Tech Lead</p>
                        </div>
                        <div className="text-right text-sm space-y-1 text-gray-600">
                            <div className="flex items-center justify-end gap-2">
                                <span>{PERSONAL_INFO.email}</span>
                                <Mail size={14} />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <span>{PERSONAL_INFO.whatsapp}</span>
                                <Phone size={14} />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <span>{PERSONAL_INFO.location}</span>
                                <MapPin size={14} />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Link href={PERSONAL_INFO.linkedin} className="text-blue-600 underline print:no-underline print:text-gray-600">
                                    linkedin.com/in/fahmi-syahputra
                                </Link>
                            </div>
                        </div>
                    </header>

                    {/* Two Column Layout for Summary & Skills */}
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">Professional Summary</h2>
                            <p className="text-sm text-gray-700 text-justify">
                                {PERSONAL_INFO.about} Passionate about building scalable, user-centric web applications and leading technical teams to deliver high-quality software solutions. Proven track record in full-stack development, system architecture, and project management.
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 border-b border-gray-200 pb-1">Core Skills</h2>
                            <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {SKILLS.map((skill, i) => (
                                    <span key={skill} className="text-sm font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded print:bg-transparent print:p-0 print:border print:border-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <section>
                        <h2 className="text-lg font-bold uppercase tracking-wider border-b-2 border-gray-900 pb-2 mb-6">Professional Experience</h2>

                        <div className="space-y-8">
                            {EXPERIENCES.map((exp) => (
                                <div key={exp.id} className="break-inside-avoid relative">
                                    <div className="grid grid-cols-[140px_1fr] gap-6">

                                        {/* Left: Metadata */}
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900 text-sm">{exp.company}</p>
                                            <p className="text-xs text-gray-500 italic mt-1">{exp.period}</p>
                                        </div>

                                        {/* Right: Content */}
                                        <div>
                                            <div className="flex justify-between items-baseline mb-2">
                                                <h3 className="font-bold text-gray-800">{exp.title}</h3>
                                            </div>

                                            <p className="text-sm text-gray-700 mb-3 leading-snug">
                                                {exp.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono mb-4">
                                                {exp.tech.map(t => (
                                                    <span key={t}>[{t}]</span>
                                                ))}
                                            </div>

                                            {/* Image Grid (Only show 2 max) */}
                                            {exp.images && exp.images.length > 0 && (
                                                <div className="grid grid-cols-2 gap-3 mt-2">
                                                    {exp.images.slice(0, 2).map((img, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="relative w-full aspect-video rounded overflow-hidden border border-gray-200 print:border-gray-300"
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={`${exp.title} screenshot ${idx + 1}`}
                                                                fill
                                                                className="object-cover"
                                                                unoptimized // Important for print rendering sometimes
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer - Only for Style */}
                    <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-gray-400 print:block hidden">
                        Portfolio - Muhammad Fahmi Syahputra - 2026
                    </div>

                </main>
            </div>

            {/* Print FAB */}
            <button
                onClick={handlePrint}
                className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 hover:scale-105 transition-all print:hidden z-50 flex items-center gap-2 group"
                title="Download as PDF"
            >
                <Download size={24} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
                    Download PDF
                </span>
            </button>
        </div>
    );
}
