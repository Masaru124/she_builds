"use client";

import React from "react";
import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";

import {
  FaInstagram,
  FaDiscord,
  FaXTwitter,
  FaLinkedin,
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
    href: "https://www.linkedin.com/company/shebuildsecosystem/",
    icon: FaLinkedin,
  },
  {
    name: "Website",
    href: "https://www.shebuildsecosystem.com",
    icon: FaGlobe,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">
              SheBuilds Bangalore
            </h3>

            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              A Bangalore-based community for women building in tech, design,
              and startups. Workshops, grants, and build programs that help
              members ship real products.
            </p>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wide">
              Community
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <a
                  href="https://www.shebuildsecosystem.com/register"
                  className="hover:text-white transition"
                >
                  Join SheBuilds
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-wide">
              Connect
            </h4>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                    p-3 rounded-full
                    border border-white/10
                    bg-white/5
                    hover:bg-white hover:text-black
                    transition-all duration-300
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-white/50 max-w-xs">
              Follow us to stay updated on events, workshops, and community
              opportunities.
            </p>
          </div>

        </div>
      </div>

      {/* Big Brand Text */}
      <div className="leading-none pt-10">
        <TextHoverEffect text="SheBuilds" />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">

          <p>© {new Date().getFullYear()} SheBuilds Bangalore</p>

          <p>Built for the SheBuilds community</p>

        </div>
      </div>
    </footer>
  );
}