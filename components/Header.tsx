"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-dashed border-black/20
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-tight">
          <span className="text-purple-700">/shebuilds</span>{" "}
          <span className="text-neutral-900">blr</span>
        </div>

        {/* CTA */}
        <nav>
          <Link
            href="https://www.shebuildsecosystem.com/register"
            className="
              inline-flex items-center justify-center
              rounded-lg
              border border-black/20
              px-4 py-2
              text-xs sm:text-sm font-semibold
              text-black
              hover:bg-black hover:text-white
              transition-all duration-200
            "
          >
            Join Us
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;