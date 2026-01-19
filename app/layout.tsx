import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PERSONAL_INFO } from "@/lib/data";
import { LazyMotionWrapper } from "@/components/LazyMotionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fahmisyahputra.my.id"),
  title: {
    default: `${PERSONAL_INFO.name} - Fullstack Engineer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.about,
  keywords: [
    "Muhammad Fahmi Syahputra",
    "Fahmi Syahputra",
    "Portfolio",
    "Fullstack Engineer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Surabaya",
    "ITS",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://fahmisyahputra.my.id" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahmisyahputra.my.id",
    title: `${PERSONAL_INFO.name} - Fullstack Engineer`,
    description: PERSONAL_INFO.about,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} - Fullstack Engineer`,
    description: PERSONAL_INFO.about,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.name,
  url: "https://fahmisyahputra.my.id",
  jobTitle: "Fullstack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Independent",
  },
  sameAs: [
    PERSONAL_INFO.linkedin,
    PERSONAL_INFO.instagram,
    `https://github.com/fahmisyahputra`,
  ],
  description: PERSONAL_INFO.about,
  image: `https://fahmisyahputra.my.id${PERSONAL_INFO.heroImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressCountry: "Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LazyMotionWrapper>
          <Navbar />
          {children}
        </LazyMotionWrapper>
      </body>
    </html>
  );
}
