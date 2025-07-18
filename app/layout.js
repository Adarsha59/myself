import {
  Cutive_Mono,
  Dancing_Script,
  Geist,
  Geist_Mono,
  Inconsolata,
  Roboto_Mono,
  VT323,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const dancescript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust weights based on font availability
  style: ["normal"], // Ensure "italic" is removed if unsupported
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adarsha Paudyal |  Contact  - Electronic & Communication Engineer",
  description:
    "Connect with Adarsha Paudyal — Electronic & Communication Engineer specializing in IoT, robotics, and web development. Reach out via GitHub, LinkedIn, YouTube, Twitter (X), and more.",
  openGraph: {
    title: "Contact Adarsha Paudyal - Electronic & Communication Engineer",
    description:
      "Official contact page for Adarsha Paudyal — connect on GitHub, LinkedIn, YouTube, Twitter (X), and more.",
    url: "https://aadarsha.vercel.app/contact",
    siteName: "Myself Adarsha Portfolio",
    images: [
      {
        url: "https://aadarsha.vercel.app/adarsha-paudyal-electronic-communication-engineer.jpg",
        width: 1200,
        height: 630,
        alt: "Adarsha Paudyal - Electronic & Communication Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adarshapaudyal_",
    creator: "@adarshapaudyal_",
    title: "Contact | Adarsha Paudyal - Electronic & Communication Engineer",
    description:
      "Contact Adarsha Paudyal — Electronic & Communication Engineer. Connect via GitHub, LinkedIn, YouTube, Twitter (X), and more.",
    images: [
      "https://aadarsha.vercel.app/adarsha-paudyal-electronic-communication-engineer.jpg",
    ],
  },
  alternates: {
    canonical: "https://aadarsha.vercel.app/contact",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Adarsha Paudyal",
      jobTitle: "Electronic & Communication Engineer",
      image:
        "https://aadarsha.vercel.app/adarsha-paudyal-electronic-communication-engineer.jpg",
      url: "https://aadarsha.vercel.app/",
      sameAs: [
        "https://github.com/Adarsha59",
        "https://www.linkedin.com/in/adarshapaudyal",
        "https://www.facebook.com/paudyaladarsha",
        "https://www.youtube.com/@moviehunt59",
        "https://twitter.com/adarshapaudyal_",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Myself Adarsha Portfolio",
      },
    }),
  },
};

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDockDemo } from "./components/FloatNav";
import Footer from "./components/Footer";
import { Boxes } from "@/components/ui/background-boxes";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-6229464226846656"
        ></meta>
        <meta
          name="google-site-verification"
          content="7m-U8YJfbnZ2B10rfZfAEeb3P5nZ9HvZtHCznHQyQaI"
        />
      </head>

      <body className={`${dancescript.variable} antialiased`}>
        {/* <Boxes /> */}
        <BackgroundBeams />
        <main className={inconsolata.className}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
