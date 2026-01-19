"use client";

import { PERSONAL_INFO } from "@/lib/data";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: PERSONAL_INFO.name,
        jobTitle: "Web Developer & CTO",
        url: "https://fahmisyahputra.my.id",
        sameAs: [
            PERSONAL_INFO.linkedin,
            "https://github.com/fahmisyahputra",
            PERSONAL_INFO.instagram,
        ],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Institut Teknologi Sepuluh Nopember",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Surabaya",
            addressCountry: "ID",
        },
        description: PERSONAL_INFO.about,
        image: `https://fahmisyahputra.my.id${PERSONAL_INFO.heroImage}`,
        worksFor: {
            "@type": "Organization",
            name: "PT. Tuladha Parenting Consulting", // Using his CTO role company
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
