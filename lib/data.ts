export interface Experience {
  id: string;
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  image: string;
}

export const PERSONAL_INFO = {
  name: "Muhammad Fahmi Syahputra",
  // Typewriter sequence starting immediately with roles
  greetings: ["Website Developer", "Tech Lead", "System Engineer"],
  location: "Surabaya, Indonesia",
  email: "muhammadfahmisyahputra07@gmail.com",
  linkedin: "https://linkedin.com/in/fahmi-syahputra",
  whatsapp: "+62818265659",
  instagram: "#", // Placeholder as requested
  about: "Informatics Engineering student at ITS with a strong background in Fullstack Development. Experienced in building scalable web applications and managing IT teams."
};

export const SKILLS = [
  "Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS",
  "Python", "WSO2 API Manager", "IBM Maximo", "Figma", "PostgreSQL", "Golang"
];

export const EXPERIENCES: Experience[] = [
  {
    "id": "pln-nusantara",
    "slug": "pln-nusantara-power",
    "title": "IT & Design Intern",
    "company": "PT. PLN Nusantara Power",
    "period": "June - Sept 2025",
    "description": "Designed centralized Master Data Management dashboard and engineered middleware for EAM systems using Python Streamlit and Node.js.",
    "tech": ["Python", "Streamlit", "Node.js", "IBM Maximo"],
    "image": "/images/pln-thumb.jpg"
  },
  {
    "id": "tuladha-cto",
    "slug": "tuladha-parenting-cto",
    "title": "Chief Technology Officer (CTO)",
    "company": "PT. Tuladha Parenting Consulting",
    "period": "2024 - Present",
    "description": "Led the end-to-end development of digital services, secured funding from P2MW, and built features for parenting insights.",
    "tech": ["Next.js", "React", "Business Strategy"],
    "image": "/images/tuladha-thumb.jpg"
  },
  {
    "id": "hmtc-head",
    "slug": "head-it-hmtc",
    "title": "Head of IT Development",
    "company": "HMTC ITS",
    "period": "2025",
    "description": "Managing UI/UX, Frontend, and Backend teams. Leading development using Next.js, TypeScript, and Golang.",
    "tech": ["Leadership", "Project Management", "Golang"],
    "image": "/images/hmtc-thumb.jpg"
  },
  {
    "id": "bem-its",
    "slug": "web-dev-bem-its",
    "title": "Website Developer",
    "company": "BEM ITS",
    "period": "2023 - 2024",
    "description": "Managed itspreneur.com. Optimized website features including profiles, databases, and event schedules.",
    "tech": ["CMS", "Web Optimization"],
    "image": "/images/bem-thumb.jpg"
  }
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return EXPERIENCES.find(exp => exp.slug === slug);
}
