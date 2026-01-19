import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PERSONAL_INFO } from "@/lib/data";
import { LazyMotionWrapper } from "@/components/LazyMotionWrapper";
import { JsonLd } from "@/components/JsonLd";

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
    default: "Muhammad Fahmi Syahputra - Web Developer & CTO",
    template: "%s | Muhammad Fahmi Syahputra",
  },
  description:
    "Portfolio of Muhammad Fahmi Syahputra, an Informatics Engineering Student at ITS, Web Developer, and CTO of Tuladha Parenting. Expert in Next.js, TypeScript, and IT Leadership.",
  keywords: [
    "Muhammad Fahmi Syahputra",
    "Fahmi Syahputra",
    "Web Developer Surabaya",
    "Next.js Developer Indonesia",
    "CTO Tuladha",
    "Mahasiswa ITS",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Fahmi Syahputra", url: "https://fahmisyahputra.my.id" }],
  creator: "Muhammad Fahmi Syahputra",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fahmisyahputra.my.id",
    title: "Muhammad Fahmi Syahputra - Web Developer & CTO",
    description:
      "Portfolio of Muhammad Fahmi Syahputra, an Informatics Engineering Student at ITS, Web Developer, and CTO of Tuladha Parenting.",
    siteName: "Muhammad Fahmi Syahputra",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or fallback to hero
        width: 1200,
        height: 630,
        alt: "Muhammad Fahmi Syahputra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fahmi Syahputra - Web Developer & CTO",
    description:
      "Portfolio of Muhammad Fahmi Syahputra, an Informatics Engineering Student at ITS, Web Developer, and CTO of Tuladha Parenting.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE",
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
        <JsonLd />
        <LazyMotionWrapper>
          <Navbar />
          {children}
        </LazyMotionWrapper>
      </body>
    </html>
  );
}
