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
  summary?: string; // Short description for cards
  achievements?: string[]; // List of key achievements
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
    "summary": "Secured national funding from Kemendikbudristek (P2MW 2024) to build a holistic parenting platform. As CTO, I led the end-to-end technical strategy, from product development to business integration.",
    "description": `Tuladha is a tech-based startup dedicated to providing holistic support for parents through expert guidance and accessible resources.

Our biggest milestone was successfully securing funding from the Program Pembinaan Mahasiswa Wirausaha (P2MW) 2024 by Kemendikbudristek. This trust empowered us to accelerate our mission and legitimize our business entity.

{{IMAGE_INDEX_1}}
My Journey as CTO:
Beyond just writing code, my role required bridging the gap between technology and business goals. I led the development of our core digital services, ensuring they weren't just functional but genuinely helpful for parents. From building the Parenting Style Test to integrating Booking systems, every feature was crafted to drive user engagement and trust.

I was also deeply involved in the strategic side on delivering the pitch deck that won us the P2MW funding and aligning our technical roadmap with our business growth.`,
    "tech": ["Next.js", "CMS", "Business Strategy", "Product Management", "Fundraising & Pitching", "Startup Operations", "Tech Leadership"],
    "achievements": [
      "🏅 National Funding Awardee: Secured grant from Kemendikbudristek (P2MW 2024).",
      "🚀 Top 40 Startup: Selected Finalist in BEKUP (BAPEKRAF) by Kemenparekraf.",
      "🏆 Top 10 Finalist: ITS Demo Day 2024 Pitching Competition.",
      "📈 Market Validation: Achieved 100% of sales target during the first pilot launch.",
      "⚖️ Legal Establishment: Oversaw the registration of PT, NIB, and Trademark Rights.",
      "💻 Product Leadership: Built and deployed tuladhaparenting.com from scratch."
    ],
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
    "summary": "Designed and engineered a centralized Master Data Management (MDM) Dashboard to standardize asset data across legacy systems. Architected a custom Node.js middleware for IBM Maximo synchronization and built a high-performance Python Streamlit visualization interface.",
    "description": `During my internship at PT PLN Nusantara Power, I identified a critical challenge in managing the vast data of power plant assets: fragmentation across multiple legacy systems. Realizing that effective decision-making relies on unified data, I took the initiative to design and engineer a Centralized Master Data Management (MDM) Dashboard, and update it to the Manager and the Mentor in Sprint Progress meeting every 2 weeks.

{{IMAGE_INDEX_1}}
My role went beyond basic development. I architected a custom middleware solution using Node.js to orchestrate seamless data synchronization between the core IBM Maximo EAM and various internal ERP platforms via WSO2 API Manager. To visualize this complex data, I built a high-performance, interactive dashboard using Python Streamlit.

{{IMAGE_INDEX_8}}
This system successfully bridged the gap between disparate data sources, providing management with a standardized view of asset health and maintenance enhancing the efficiency of operational reporting in PT. PLN Nusantara Power.

{{IMAGE_INDEX_2}}`,
    "tech": ["Master Data Management (MDM)", "Python", "Streamlit", "Node.js", "IBM Maximo", "WSO2 API Manager", "Ellipse ERP"],
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
    "summary": "Oversee the entire product lifecycle of the organization's digital ecosystem. Leading a cross-functional team, I established a structured SDLC and adopted a modern tech stack featuring Golang and Next.js to ensure delivery excellence.",
    "description": `As the Head of IT Development at HMTC ITS, I am responsible for more than just code but I oversee the entire product lifecycle of the organization's digital ecosystem. Leading a cross-functional team of UI/UX Designers, Frontend, and Backend Developers, I established a structured software development lifecycle (SDLC) to ensure delivery excellence.

{{IMAGE_INDEX_2}}

I spearheaded the technical decision to adopt a modern, high-performance tech stack featuring Golang for backend services and Next.js (TypeScript) for the frontend. Beyond technology, I implemented engineering best practices including rigorous code reviews, standardized documentation, and Agile workflows to maintain code quality and foster a collaborative environment for student developers.`,
    "tech": ["Leadership", "Project Management", "System Design", "Golang", "Next.js"],
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
