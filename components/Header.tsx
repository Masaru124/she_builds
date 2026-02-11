"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md  border border-dashed border-black/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold uppercase text-purple-700">
          /shebuilds <span className="text-neutral-900">blr</span>
        </div>

        <nav className="block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="https://www.shebuildsecosystem.com/register"
                className=" px-3 py-2 border border-dashed border-black/20 hover:bg-black hover:text-white text-black rounded font-bold transition"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
