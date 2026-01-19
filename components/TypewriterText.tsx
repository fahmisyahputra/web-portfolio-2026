"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
    texts: string[];
    speed?: number;
    waitTime?: number;
    className?: string;
}

export const TypewriterText = ({ texts, speed = 80, waitTime = 2000, className = "" }: TypewriterTextProps) => {
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
        }, Math.max(reverse ? 50 : subIndex === texts[index].length ? waitTime : speed, parseInt((Math.random() * 30).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts, speed, waitTime]);

    // Blink cursor effect
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    return (
        <span className={`inline-flex items-center ${className}`}>
            {texts[index].substring(0, subIndex)}
            <span className={`ml-1 w-[2px] h-[1em] bg-current ${blink ? "opacity-100" : "opacity-0"}`}></span>
        </span>
    );
};
