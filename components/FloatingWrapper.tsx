"use client";

import { m } from "framer-motion";

interface FloatingWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    duration?: number;
    yOffset?: number;
}

export function FloatingWrapper({
    children,
    className = "",
    duration = 4,
    yOffset = 10,
}: FloatingWrapperProps) {
    return (
        <m.div
            animate={{ y: [-yOffset, yOffset, -yOffset] }}
            transition={{
                y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
            className={className}
        >
            {children}
        </m.div>
    );
}
