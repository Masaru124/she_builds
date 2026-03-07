"use client";

import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 z-50 flex  justify-center">
      <header
        className="
          w-full
        bg-white
          
          border-b border-black/10
          
        "
      >
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-lg sm:text-2xl font-bold tracking-tight">
            <span className="text-purple-600">/shebuilds</span>{" "}
            <span className="text-neutral-900">blr</span>
          </div>

          <nav>
            <Link
              href="https://www.shebuildsecosystem.com/register"
              className="
                inline-flex items-center justify-center
                
                border border-black/20
                px-4 py-2
                text-xs sm:text-sm font-semibold
                bg-purple-600
                text-white
                hover:bg-black hover:text-white
                transition-all duration-200
              "
            >
              Join Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
