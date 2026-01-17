"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Instagram, ArrowUpRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import Link from "next/link";

export function ContactSection() {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: PERSONAL_INFO.linkedin,
            color: "hover:text-[#0077b5] hover:border-[#0077b5]",
        },
        {
            name: "Email",
            icon: Mail,
            href: `mailto:${PERSONAL_INFO.email}`,
            color: "hover:text-red-500 hover:border-red-500",
        },
        {
            name: "WhatsApp",
            icon: Phone,
            href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`,
            color: "hover:text-green-500 hover:border-green-500",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: PERSONAL_INFO.instagram,
            color: "hover:text-pink-500 hover:border-pink-500",
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 mb-6">
                        <span className="text-sm font-semibold text-green-700">Open for Work & Internships</span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                        Let's Build Something Together
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        I am actively seeking opportunities to contribute my skills in fullstack development and system engineering. Whether it's a project, internship, or full-time role, I'd love to chat.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 hover:scale-105 transition-all shadow-lg shadow-gray-200"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                        <Link
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
                        >
                            <Mail size={20} />
                            Get in Touch
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-100 text-gray-600 font-medium transition-all shadow-sm group ${social.color}`}
                            >
                                <social.icon size={20} className="transition-transform group-hover:scale-110" />
                                {social.name}
                                <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
