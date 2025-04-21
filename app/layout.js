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
  title:
    "Adarsha Paudyal – Full Stack Web Developer | MERN Stack & Next.js Specialist",
  description:
    "Explore the portfolio of Adarsha Paudyal, a passionate Electronics and Communication Engineering student specializing in full-stack development with expertise in React.js, Node.js, and MongoDB. Discover projects in web development, IoT, and robotics.",
  keywords: [
    "Adarsha Paudyal",
    "paudyal",
    "adarsha",
    "adarshapaudyal",
    "adarshapaudyal.com",
    "adarshapaudyal portfolio",
    "adarshapaudyal resume",
    "adarshapaudyal projects",
    "adarshapaudyal contact",

    "adarshapaudyal blog",
    "adarshapaudyal services",
    "adarshapaudyal projects",
    "adarshapaudyal skills",
    "adarshapaudyal experience",
    "adarshapaudyal education",
    "adarshapaudyal work",
    "adarshapaudyal contact",
    "aadarshapaudyal",
    "adarshapaudyal github",
    "adarshapaudyal linkedin",
    "ncit adarshapaudyal",
    "full stack developer",
    "MERN stack",
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
    "IoT",
    "robotics",
    "web development",
    "portfolio",
    "Nepal",
    "Electronics and Communication Engineering",
  ],
  author: "Adarsha Paudyal",
  openGraph: {
    type: "website",
    url: "https://www.aadarshapaudyal.com.np", // Replace with your actual website URL
    title:
      "Adarsha Paudyal – Full Stack Web Developer | MERN Stack & Next.js Specialist",
    description:
      "Explore the portfolio of Adarsha Paudyal, a passionate Electronics and Communication Engineering student specializing in full-stack development with expertise in React.js, Node.js, and MongoDB.",
    images: [
      {
        url: "https://i.pinimg.com/736x/b6/7e/71/b67e713fc5ad2722b96ad3c86fa901bc.jpg", // Replace with an actual image path
        width: 800,
        height: 600,
        alt: "Adarsha Paudyal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adarshapaudyal_", // Replace with your Twitter handle
    title:
      "Adarsha Paudyal – Full Stack Web Developer | MERN Stack & Next.js Specialist",
    description:
      "Explore the portfolio of Adarsha Paudyal, a passionate Electronics and Communication Engineering student specializing in full-stack development with expertise in React.js, Node.js, and MongoDB.",
    image:
      "https://i.pinimg.com/736x/b6/7e/71/b67e713fc5ad2722b96ad3c86fa901bc.jpg", // Replace with an actual image path
  },
  links: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://www.aadarshapaudyal.com.np" },
  ],
};

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDockDemo } from "./components/FloatNav";
import Footer from "./components/Footer";
import { Boxes } from "@/components/ui/background-boxes";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancescript.variable} antialiased`}>
        <BackgroundBeams />
        {/* <Boxes /> */}
        <main className={inconsolata.className}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
