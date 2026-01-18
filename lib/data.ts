export interface Experience {
  id: string;
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  image: string; // Primary thumbnail
  images?: string[]; // Gallery/Carousel images
}

export const PERSONAL_INFO = {
  name: "Muhammad Fahmi Syahputra",
  // Typewriter sequence starting immediately with roles
  greetings: ["Website Developer", "Tech Lead", "System Engineer"],
  location: "Surabaya, Indonesia",
  email: "muhammadfahmisyahputra07@gmail.com",
  linkedin: "https://linkedin.com/in/fahmi-syahputra",
  whatsapp: "+62818265659",
  instagram: "https://www.instagram.com/fahmisyahputraa_/",
  heroImage: "/images/hero-section/self-picture.jpeg",
  about: "Informatics Engineering student at ITS with a strong background in Fullstack Development. Experienced in building scalable web applications and managing IT teams."
};

export const SKILLS = [
  "Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS",
  "Python", "WSO2 API Manager", "IBM Maximo", "Figma", "PostgreSQL", "Golang"
];

export const EXPERIENCES: Experience[] = [
  {
    "id": "tuladha-cto",
    "slug": "tuladha-parenting-cto",
    "title": "Chief Technology Officer (CTO)",
    "company": "PT. Tuladha Parenting Consulting",
    "period": "2024 - Present",
    "description": "Led the end-to-end development of digital services, secured funding from P2MW, and built features for parenting insights.",
    "tech": ["CMS", "Next.js", "Business Strategy"],
    "image": "/images/cto-tuladha/1-hero-web-tuladha.png",
    "images": [
      "/images/cto-tuladha/1-hero-web-tuladha.png",
      "/images/cto-tuladha/2-demoday-tuladha.png",
      "/images/cto-tuladha/3-program-tuladha.png",
      "/images/cto-tuladha/4-artikel-parenting.png",
      "/images/cto-tuladha/5-tim-kami.png"
    ]
  },
  {
    "id": "pln-nusantara",
    "slug": "pln-nusantara-power",
    "title": "IT & Design Intern",
    "company": "PT. PLN Nusantara Power",
    "period": "June - Sept 2025",
    "description": "Designed centralized Master Data Management dashboard and engineered middleware for EAM systems using Python Streamlit and Node.js.",
    "tech": ["Python", "Streamlit", "Node.js", "IBM Maximo"],
    "image": "/images/pln-itd-intern/1-pln.jpeg",
    "images": [
      "/images/pln-itd-intern/1-pln.jpeg",
      "/images/pln-itd-intern/2-pln.jpeg",
      "/images/pln-itd-intern/3-pln.jpeg",
      "/images/pln-itd-intern/4-pln.jpeg",
      "/images/pln-itd-intern/5-pln.jpeg",
      "/images/pln-itd-intern/6-pln.jpeg",
      "/images/pln-itd-intern/7-pln.png",
      "/images/pln-itd-intern/8-pln.png",
      "/images/pln-itd-intern/9-pln.png",
      "/images/pln-itd-intern/10-pln.png"
    ]
  },
  {
    "id": "hmtc-head",
    "slug": "head-it-hmtc",
    "title": "Head of IT Development",
    "company": "HMTC ITS",
    "period": "2025",
    "description": "Managing UI/UX, Frontend, and Backend teams. Leading development using Next.js, TypeScript, and Golang.",
    "tech": ["Leadership", "Project Management", "Golang"],
    "image": "/images/head-itdev-hmtc/1-hmtc.png",
    "images": [
      "/images/head-itdev-hmtc/1-hmtc.png",
      "/images/head-itdev-hmtc/2-hmtc.jpeg",
      "/images/head-itdev-hmtc/3-hmtc.png",
      "/images/head-itdev-hmtc/4-hmtc.png",
      "/images/head-itdev-hmtc/5-hmtc.png",
      "/images/head-itdev-hmtc/6-hmtc.png",
      "/images/head-itdev-hmtc/7-hmtc.png"
    ]
  },
  {
    "id": "hmtc-pic",
    "slug": "pic-website-hmtc",
    "title": "Website Developer Staff & PIC",
    "company": "HMTC ITS",
    "period": "Mar 2024 - Feb 2025",
    "description": "As the Person In Charge (PIC) of Website Development Team, ensuring smooth collaboration and task delegation within the team. Utilizing Next.js, TypeScript, and Tailwind CSS for development tasks.",
    "tech": ["Next.js", "Team Leadership", "Web Development"],
    "image": "/images/pic-website-hmtc/1-pic-hmtc.png",
    "images": [
      "/images/pic-website-hmtc/1-pic-hmtc.png",
      "/images/pic-website-hmtc/2-pic-hmtc.jpeg"
    ]
  },
  {
    "id": "bem-its",
    "slug": "web-dev-bem-its",
    "title": "Website Developer BEM ITS 2024",
    "company": "BEM ITS",
    "period": "2023 - 2024",
    "description": "Innovating and Managing the Official Website of Kementrian Ekonomi Kreatif BEM ITS 2023/2024. Redesigned all sections & features to the latest Grand Design Model (GSM), implementing user-friendly interfaces. Introduced innovative features such as Ekraf Feedback for ratings and Ekraf News & Article for entrepreneurship topics.",
    "tech": ["CMS", "Web Development", "Web Design"],
    "image": "/images/webdev-bem-its/1-bemits.png",
    "images": [
      "/images/webdev-bem-its/1-bemits.png",
      "/images/webdev-bem-its/2-bemits.png",
      "/images/webdev-bem-its/3-bemits.png",
      "/images/webdev-bem-its/4-bemits.png",
      "/images/webdev-bem-its/5-bemits.png",
      "/images/webdev-bem-its/6-bemits.png",
      "/images/webdev-bem-its/7-bemits.png",
      "/images/webdev-bem-its/8-bemits.png",
      "/images/webdev-bem-its/9-bemits.png"
    ]
  },
  {
    "id": "bem-fk-unej",
    "slug": "bem-fk-unej",
    "title": "Website Developer",
    "company": "BEM FK UNEJ 2024",
    "period": "Project",
    "description": "Developed and managed the official website for the Student Executive Board (BEM) of the Faculty of Medicine University of Jember (BEM FK UNEJ) 2024 and the PenproLibrary (e-learning) page. All forms are automatically synced to Google Sheets.",
    "tech": ["CMS", "Web Development", "Web Design"],
    "image": "/images/project-bemfkunej/1-bemfkunej.png",
    "images": [
      "/images/project-bemfkunej/1-bemfkunej.png",
      "/images/project-bemfkunej/2-bemfkunej.png",
      "/images/project-bemfkunej/3-bemfkunej.png",
      "/images/project-bemfkunej/4-bemfkunej.png",
      "/images/project-bemfkunej/5-bemfkunej.png",
      "/images/project-bemfkunej/6-bemfkunej.png",
      "/images/project-bemfkunej/7-bemfkunej.png",
      "/images/project-bemfkunej/8-bemfkunej.png"
    ]
  },
  {
    "id": "jangkau-ptn",
    "slug": "project-jangkau-ptn",
    "title": "Website Developer JangkauPTN",
    "company": "Jangkau PTN",
    "period": "Project",
    "description": "JangkauPTN is part of the Program Kerja of BEM ITS Ekonomi Kreatif 2024. Collaborated with EduLab for the UTBK TryOut and Amadeo Yesa (Highest UTBK Scorer 2023) for Webinars.",
    "tech": ["CMS", "Education Tech", "Web Development"],
    "image": "/images/project-jangkauptn/1-jangkauptn.png",
    "images": [
      "/images/project-jangkauptn/1-jangkauptn.png",
      "/images/project-jangkauptn/2-jangkauptn.png",
      "/images/project-jangkauptn/3-jangkauptn.png",
      "/images/project-jangkauptn/4-jangkauptn.png",
      "/images/project-jangkauptn/5-jangkauptn.png"
    ]
  },
  {
    "id": "agrits",
    "slug": "project-agrits",
    "title": "Fullstack Developer",
    "company": "AGRITS Smart Farming",
    "period": "Project",
    "description": "AGRITS.id is a Smart Farming Monitoring System. A specialized AgTech platform built for the Sendang Biru Group from Teknik Geomatika ITS students. AGRITS built using Next.js, and personal Geospatial Visualization API. It leverages data from Sentinel-2 and Himawari-9 satellites to visualize crop health (NDVI), soil temperature, and rainfall patterns. This tool empowers farmers to make data-driven decisions on irrigation and pest control, ultimately boosting rice productivity.",
    "tech": ["Next.js", "Geospatial API", "AgTech"],
    "image": "/images/project-agrits/1-agrits.png",
    "images": [
      "/images/project-agrits/1-agrits.png",
      "/images/project-agrits/2-agrits.png",
      "/images/project-agrits/3-agrits.png",
      "/images/project-agrits/4-agrits.png",
      "/images/project-agrits/5-agrits.png",
      "/images/project-agrits/6-agrits.png",
      "/images/project-agrits/7-agrits.png"
    ]
  }
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return EXPERIENCES.find(exp => exp.slug === slug);
}
