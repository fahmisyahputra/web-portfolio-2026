import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

import { PERSONAL_INFO } from "@/lib/data";
import { FloatingWrapper } from "./FloatingWrapper";
import { TypewriterText } from "./TypewriterText";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20 text-center md:flex-row md:text-left md:justify-between max-w-7xl mx-auto">
            <div className="z-10 flex flex-col items-center md:items-start max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                        Available for new projects
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                    {PERSONAL_INFO.name}
                </h1>

                <div className="text-2xl sm:text-3xl h-10 sm:h-12 mb-8 text-gray-500 font-medium">
                    <TypewriterText texts={PERSONAL_INFO.greetings} />
                </div>

                <p className="max-w-md text-lg text-gray-600 mb-10 leading-relaxed">
                    {PERSONAL_INFO.about}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
                    >
                        View My Work <ArrowRight size={16} />
                    </a>
                    <a
                        href="/cv/CV ATS Fahmi - Januari 2026.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                    >
                        Download CV <Download size={16} />
                    </a>
                </div>
            </div>

            <div className="relative mt-20 md:mt-0 md:ml-10 w-full max-w-md h-[400px] flex items-center justify-center">
                <div className="relative w-80 h-80">
                    <div className="absolute inset-[-20px] rounded-full border border-dashed border-gray-200 animate-[spin_50s_linear_infinite]" />


                    <FloatingWrapper
                        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                        duration={6}
                        yOffset={15}
                    >
                        {PERSONAL_INFO.heroImage && (
                            <Image
                                src={PERSONAL_INFO.heroImage}
                                alt={PERSONAL_INFO.name}
                                fill
                                className="object-cover object-top"
                                priority
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        )}
                    </FloatingWrapper>


                    <FloatingWrapper
                        className="absolute top-10 -right-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-10"
                        duration={4}
                        yOffset={10}
                    >
                        <MousePointer2 size={24} className="text-gray-900" />
                    </FloatingWrapper>

                    <FloatingWrapper
                        className="absolute bottom-10 -left-8 bg-white px-5 py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 z-10"
                        duration={5}
                        yOffset={10}
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm font-semibold">Tech Enthusiast</span>
                    </FloatingWrapper>
                </div>
            </div>
        </section>
    );
}
