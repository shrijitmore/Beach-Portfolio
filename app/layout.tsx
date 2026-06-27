import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Italiana,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://shrijitmore.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shrijit More — Full-Stack Engineer | AI, Web3, Backend",
    template: "%s | Shrijit More",
  },
  description:
    "Shrijit More is a full-stack engineer with 2.5 years of production experience in AI (LangGraph, RAG), Web3 (Solana, Solidity), and distributed backends (Kafka, Celery, PostgreSQL). Based in Pune, India.",
  keywords: [
    "Shrijit More",
    "Full-Stack Developer",
    "AI Engineer",
    "Web3 Developer",
    "LangGraph",
    "RAG",
    "Solana Developer",
    "Solidity",
    "React Developer",
    "Kafka",
    "Python Developer",
    "Backend Engineer",
    "Pune India",
    "Freelance Developer",
    "Portfolio",
    "LangChain",
    "OpenAI",
    "Smart Contracts",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Shrijit More", url: SITE_URL }],
  creator: "Shrijit More",
  publisher: "Shrijit More",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Shrijit More — Portfolio",
    title: "Shrijit More — Full-Stack Engineer | AI, Web3 & Backend",
    description:
      "Full-stack engineer shipping AI systems, Web3 dApps, and distributed backends. 2.5 years in production. Zero hallucinations. Based in Pune, India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shrijit More — Full-Stack Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrijit More — Full-Stack Engineer | AI, Web3 & Backend",
    description:
      "Full-stack engineer shipping AI systems, Web3 dApps, and distributed backends. Zero hallucinations in production.",
    creator: "@ShrijitM_26",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shrijit More",
    url: SITE_URL,
    image: `${SITE_URL}/profile1.png`,
    jobTitle: "Full-Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "C4i4 Lab",
    },
    sameAs: [
      "https://github.com/shrijitmore",
      "https://linkedin.com/in/shrijitmore26",
      "https://x.com/ShrijitM_26",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "LangGraph",
      "LangChain",
      "RAG",
      "Web3",
      "Solana",
      "Solidity",
      "Smart Contracts",
      "Full-Stack Development",
      "Python",
      "TypeScript",
      "React",
      "Kafka",
      "PostgreSQL",
      "Distributed Systems",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    email: "shrijit.m00@gmail.com",
    description:
      "Full-stack engineer with 2.5 years of production experience building distributed backends, AI systems, and Web3 applications.",
  };

  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${italiana.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
