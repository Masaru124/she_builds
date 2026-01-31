"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-14">

        {/* Top footer */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-bold tracking-tight">
              SheBuilds
            </h3>

            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              A global community empowering women to build, ship, and lead in
              tech.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 text-sm">

            <div>
              <h4 className="font-semibold mb-4">
                Community
              </h4>
              <ul className="space-y-3 text-black/70">
                <li className="hover:text-black cursor-pointer">About</li>
                <li className="hover:text-black cursor-pointer">Events</li>
                <li className="hover:text-black cursor-pointer">Mentorship</li>
                <li className="hover:text-black cursor-pointer">Join SheBuilds</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Connect
              </h4>
              <ul className="space-y-3 text-black/70">
                <li>
                  <a
                    href="mailto:shebuildsblr@gmail.com"
                    className="hover:text-black"
                  >
                    Email
                  </a>
                </li>
                <li className="hover:text-black cursor-pointer">
                  Instagram
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-black/50 mt-14">
          © {new Date().getFullYear()} SheBuilds Community. Built by women. For the future.
        </p>
      </div>

      {/* Big brand word */}
      <div className="relative mt overflow-hidden">
        <h1
          className="
            text-[22vw] md:text-[14vw]
            font-[new] font-extrabold
            leading-none
            text-center
            text-purple-800/10
            translate-y-[30%]
            select-none
            pointer-events-none
          "
        >
          SHEBUILDS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
