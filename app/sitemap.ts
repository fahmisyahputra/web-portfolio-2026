import { EXPERIENCES } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://fahmisyahputra.my.id";

    const experiences = EXPERIENCES.map((exp) => ({
        url: `${baseUrl}/experience/${exp.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio-print`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        ...experiences,
    ];
}
