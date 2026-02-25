"use client";

import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

import {
  FaInstagram,
  FaDiscord,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/shebuilds_bangalore",
    icon: FaInstagram,
  },
  {
    name: "Discord",
    href: "https://discord.gg/mfjz9UkCe",
    icon: FaDiscord,
  },
  {
    name: "X",
    href: "https://x.com/SheBuildsEco",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shebuildsecosystem/", // replace with real link
    icon: FaLinkedin,
  },
  {
    name: "Website",
    href: "https://www.shebuildsecosystem.com",
    icon: FaGlobe,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-10 text-white">
        <div className="flex flex-col md:flex-row md:justify-between gap-14 border-b border-white/10 pb-12">
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-wide">
              SheBuilds Bangalore
            </h3>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              A global community empowering women to build, ship, and lead in
              tech.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-14 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-5 tracking-wide">
                Community
              </h4>

              <ul className="space-y-3 text-white/60">
                <li className="hover:text-white transition cursor-pointer">
                  <a href="https://www.shebuildsecosystem.com/register">
                    Join SheBuilds
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 tracking-wide">Connect</h4>

              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/40 mt-8">
          © {new Date().getFullYear()} SheBuilds Community. For the future.
        </p>
      </div>

      <div className="m-0 md:pt-10 leading-none">
  <TextHoverEffect text="SheBuilds" />
</div>
    </footer>
  );
};

export default Footer;
