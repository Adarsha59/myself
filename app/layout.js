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
  title: "Create Next App",
  description: "Generated by create next app",
};
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDockDemo } from "./components/FloatNav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancescript.variable} antialiased`}>
        <BackgroundBeams />
        <main className={inconsolata.className}>
          <Navbar />
          {/* <FloatingDockDemo /> */}

          {children}
        </main>
      </body>
    </html>
  );
}
