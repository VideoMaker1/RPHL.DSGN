import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Configure fonts for brutalist aesthetic
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RPHL DSGN | Arte Digital & Design",
  description: "Portfolio de arte digital e design brutalista. Explorando a interseção entre arte minimalista e design contemporâneo através de composições ousadas e tipografia geométrica.",
  keywords: [
    "arte digital",
    "design brutalista",
    "design minimalista",
    "ilustração digital",
    "identidade visual",
    "UI/UX design",
    "motion graphics",
    "portfolio",
    "designer",
    "artista digital",
    "São Paulo",
    "Brasil"
  ],
  authors: [{ name: "RPHL DSGN" }],
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "RPHL DSGN | Arte Digital & Design",
    description: "Portfolio de arte digital e design brutalista. Explorando a interseção entre arte minimalista e design contemporâneo.",
    url: "https://rphldsgn.com",
    siteName: "RPHL DSGN",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo-main.png",
        width: 1200,
        height: 630,
        alt: "RPHL DSGN - Arte Digital & Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPHL DSGN | Arte Digital & Design",
    description: "Portfolio de arte digital e design brutalista.",
    images: ["/logo-main.png"],
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
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
