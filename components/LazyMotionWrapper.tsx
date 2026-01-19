"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export const LazyMotionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div initial="initial" animate="animate" exit="exit">
                {children}
            </m.div>
        </LazyMotion>
    );
};
