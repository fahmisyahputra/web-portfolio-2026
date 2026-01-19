"use client";

import { SKILLS } from "@/lib/data";

export function TechMarquee() {
    return (
        <div className="w-full overflow-hidden bg-background py-10 border-y border-border/50">
            <div className="relative flex w-full max-w-5xl mx-auto overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* Repeat the skills list multiple times to ensure smooth infinite scroll */}
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="flex gap-8 mx-4">
                            {SKILLS.map((skill) => (
                                <div
                                    key={skill}
                                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
                                >
                                    <span className="text-primary">{skill}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* Gradients for fading edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </div>
    );
}
