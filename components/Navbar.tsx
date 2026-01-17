"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="flex items-center gap-6 rounded-2xl border border-black/5 bg-white/70 px-6 py-3 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
                <Link href="/" className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity">
                    FAHMI SYAHPUTRA
                </Link>
                <div className="h-4 w-[1px] bg-black/10" />
                <div className="flex items-center gap-4 text-black/70">
                    <Link href="https://linkedin.com/in/fahmi-syahputra" target="_blank" className="hover:text-black hover:scale-110 transition-all">
                        <Linkedin size={18} />
                    </Link>
                    <Link href="mailto:muhammadfahmisyahputra07@gmail.com" className="hover:text-black hover:scale-110 transition-all">
                        <Mail size={18} />
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
