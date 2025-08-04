import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import FaviconSwitcher from "@/components/FaviconSwitcher";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Nabil Lemriki - Fullstack Developer & SEO Consultant",
    template: "%s | Nabil Lemriki",
  },
  description:
    "A passionate fullstack developer & SEO consultant with 4+ years of experience building smart, scalable websites. Based in Morocco, fluent in English, French, and Arabic.",
  keywords: [
    "fullstack developer",
    "SEO consultant",
    "web development",
    "Morocco",
    "Laravel",
    "Django",
    "ASP.NET",
    "JavaScript",
    "Python",
    "PHP",
    "C#",
    "UX/UI design",
    "WordPress",
    "CMS",
  ],
  authors: [
    {
      name: "Nabil Lemriki",
      url: "https://xdream-dev.github.io/Nabil-Lemriki-Portfolio/",
    },
  ],
  creator: "Nabil Lemriki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xdream-dev.github.io/Nabil-Lemriki-Portfolio/",
    title: "Nabil Lemriki - Fullstack Developer & SEO Consultant",
    description:
      "A passionate fullstack developer & SEO consultant with 4+ years of experience building smart, scalable websites.",
    siteName: "Nabil Lemriki Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nabil Lemriki - Fullstack Developer & SEO Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Lemriki - Fullstack Developer & SEO Consultant",
    description:
      "A passionate fullstack developer & SEO consultant with 4+ years of experience building smart, scalable websites.",
    images: ["/og-image.jpg"],
    creator: "@nabillemriki",
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Use only your custom XDreamLight.png favicon */}
        <link rel="icon" href="./1.gif" type="image/png" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-solway antialiased">
        <FaviconSwitcher />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
