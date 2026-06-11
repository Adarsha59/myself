import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-4 md:top-12 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-fit overflow-x-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-4 py-3 flex items-center gap-4 md:gap-8 whitespace-nowrap text-white text-xs md:text-base font-medium">
          <Link href="/tool" className="hover:text-purple-400 transition">
            Services
          </Link>

          <Link href="/resume" className="hover:text-purple-400 transition">
            Resume
          </Link>

          <Link
            href="https://hamroblog.vercel.app/"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            Blog
          </Link>

          <Link href="/project" className="hover:text-purple-400 transition">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>

          <Link
  href="/fifa-WC-2026"
  className="group flex items-center gap-2 border-l border-white/20 pl-4"
>
  <img
    src="https://assets.football-logos.cc/logos/tournaments/700x700/fifa-world-cup-2026--white.9ba8a004.png"
    alt="FIFA World Cup 2026"
    width={24}
    height={24}
    className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
  />

  <span
    className="
      hidden sm:block
      font-black
      uppercase
      tracking-wider
      bg-gradient-to-r
      from-cyan-400
      via-white
      to-cyan-400
      bg-clip-text
      text-transparent
      animate-pulse
      transition-all
      duration-300
      group-hover:scale-105
    "
  >
    FIFA WC 2026
  </span>
</Link>
        </div>
      </div>
    </div>
  );
}