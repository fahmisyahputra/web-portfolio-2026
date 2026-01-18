"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { useEffect, useState } from "react";
import Image from "next/image";

const TypewriterText = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (index === texts.length) return;

        if (subIndex === texts[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : subIndex === texts[index].length ? 1000 : 80, parseInt((Math.random() * 30).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    // Blink cursor effect
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    return (
        <span className="inline-flex items-center text-gray-500 font-normal">
            {texts[index].substring(0, subIndex)}
            <span className={`ml-1 w-[2px] h-[1em] bg-gray-400 ${blink ? "opacity-100" : "opacity-0"}`}></span>
        </span>
    );
};

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <section
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20 text-center md:flex-row md:text-left md:justify-between max-w-7xl mx-auto"
            onMouseMove={handleMouseMove}
        >
            <div className="z-10 flex flex-col items-center md:items-start max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-500">Available for new projects</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4"
                >
                    {PERSONAL_INFO.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-3xl h-10 sm:h-12 mb-8 text-gray-500 font-medium"
                >
                    <TypewriterText texts={PERSONAL_INFO.greetings} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-md text-lg text-gray-600 mb-10 leading-relaxed"
                >
                    {PERSONAL_INFO.about}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
                    >
                        View My Work <ArrowRight size={16} />
                    </a>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                    >
                        Download CV <Download size={16} />
                    </a>
                </motion.div>
            </div>

            {/* Visual Element on Right - Abstract Interactive Shapes */}
            {/* Visual Element on Right - User Photo with Decorations */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative mt-20 md:mt-0 md:ml-10 w-full max-w-md h-[400px] flex items-center justify-center"
            >
                <div className="relative w-80 h-80">
                    {/* Decorative rotating ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] rounded-full border border-dashed border-gray-200"
                    />

                    {/* Main Photo Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        {PERSONAL_INFO.heroImage && (
                            <Image
                                src={PERSONAL_INFO.heroImage}
                                alt={PERSONAL_INFO.name}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        )}
                    </div>

                    {/* Floating elements */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 -right-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-10"
                    >
                        <MousePointer2 size={24} className="text-gray-900" />
                    </motion.div>

                    <div className="absolute bottom-10 -left-8 bg-white px-5 py-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm font-semibold">Tech Enthusiast</span>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
