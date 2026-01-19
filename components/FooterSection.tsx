"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterText } from "./TypewriterText";

export function FooterSection() {
    const [restartKey, setRestartKey] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-150px", once: false }}
            onViewportEnter={() => setRestartKey((prev) => prev + 1)}
            className="mt-20 text-center w-full"
        >
            <div className="inline-flex flex-col items-center gap-2">
                <div className="text-xl text-gray-400 font-medium tracking-wide min-h-[32px] flex items-center justify-center">
                    <TypewriterText
                        texts={["...and many more exciting projects in the works."]}
                        speed={50}
                        waitTime={10000}
                        key={restartKey}
                    />
                </div>
                <span className="text-sm text-gray-300">
                    Staying curious, always building.
                </span>

                <Link
                    href="/portfolio-print"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all text-sm shadow-sm"
                >
                    View Portfolio Summary PDF <ArrowRight size={14} />
                </Link>
            </div>
        </motion.div>
    );
}
