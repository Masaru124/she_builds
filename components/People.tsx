"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Github, Globe, Twitter } from "lucide-react";

type Person = {
  name: string;
  image: string;
  linkedin: string;
  instagram?: string;
  github?: string;
  x?: string;
  website?: string;
  color?: string;
};

type TeamKey = "Sponsorship" | "Web" | "Design" | "Media" | "Marketing";

const TEAM_COLORS: Record<TeamKey | "CoFounders" | "RegionalHead", string> = {
  CoFounders: "bg-pink-50",
  RegionalHead: "bg-purple-50",
  Sponsorship: "bg-yellow-50",
  Web: "bg-blue-50",
  Design: "bg-green-50",
  Media: "bg-red-50",
  Marketing: "bg-orange-50",
};

const COFOUNDERS: Person[] = [
  {
    name: "Nikita",
    image: "/gallery/nikita.jpeg",
    linkedin: "#",
    instagram: "#",
    github: "#",
    x: "#",
    website: "#",
  },
  { name: "Ekta", image: "/gallery/ekta.jpeg", linkedin: "#", instagram: "#" },
];

const REGIONAL_HEAD: Person[] = [
  {
    name: "Trisha",
    image: "/gallery/trisha.jpeg",
    linkedin: "#",
    instagram: "#",
  },
];

const TEAMS: Record<TeamKey, Person[]> = {
  Sponsorship: [
    {
      name: "Aastha",
      image: "/gallery/aastha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    { name: "Harsh", image: "/gallery/harsh.jpeg", linkedin: "#" },
    {
      name: "Pia",
      image: "/gallery/pia.jpeg",
      linkedin: "#",
      instagram: "#",
      x: "#",
    },
    {
      name: "Mehran",
      image: "/gallery/mehran.jpeg",
      linkedin: "#",
      instagram: "#",
      x: "#",
    },
  ],
  Web: [
    {
      name: "Bichitra",
      image: "/gallery/bichitra.jpeg",
      linkedin: "#",
      github: "#",
      website: "#",
    },
    {
      name: "Matharishwa",
      image: "/gallery/matha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
  ],
  Design: [
    {
      name: "Raksha",
      image: "/gallery/raksha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Moulika",
      image: "/gallery/moulika.jpeg",
      linkedin: "#",
      website: "#",
    },
    {
      name: "Moulya",
      image: "/gallery/amulya.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sushanth",
      image: "/gallery/sushant.jpeg",
      linkedin: "#",
      github: "#",
    },
  ],
  Media: [
    {
      name: "Vivan",
      image: "/gallery/vivan.jpeg",
      linkedin: "#",
      instagram: "#",
      x: "#",
    },
    {
      name: "Gnanesh",
      image: "/gallery/gnanesh.jpeg",
      linkedin: "#",
      instagram: "#",
    },
  ],
  Marketing: [
    {
      name: "Bharath",
      image: "/gallery/bharath.jpeg",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Tathagat",
      image: "/gallery/thatagat.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    { name: "Naman", image: "/gallery/naman.jpeg", linkedin: "#" },
    {
      name: "Lohitha",
      image: "/gallery/lohitha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    { name: "Faiza", image: "/gallery/faiza.jpeg", linkedin: "#" },
    {
      name: "Khushi",
      image: "/gallery/khushi.jpeg",
      linkedin: "#",
      instagram: "#",
      x: "#",
    },
  ],
};

const hasLink = (url?: string) => !!url && url.trim() !== "#";

function DashedSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-dashed border-black/20 py-10">
      {children}
    </div>
  );
}

const PersonCard = React.memo(function PersonCard({
  person,
}: {
  person: Person;
}) {
  return (
    <div className="w-74 group">
      <div
        className={`relative overflow-hidden rounded-2xl border  border-black/10 transition-all duration-300 ${person.color ?? "bg-white"
          }`}
      >
        <div className="relative p-3">
          <div className="relative w-full h-66 overflow-hidden rounded-xl border border-black/10">
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="256px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="pt-4 pb-3 px-1 flex items-center justify-between">
            <h3 className="text-base font-semibold text-neutral-900">
              {person.name}
            </h3>

            <div className="flex items-center gap-2">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-black/10 bg-white/60 hover:bg-blue-600 transition"
              >
                <Linkedin className="w-4 h-4 text-neutral-900" />
              </a>

              {hasLink(person.github) && (
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-black/10 bg-white/60 hover:bg-black transition"
                >
                  <Github className="w-4 h-4 text-neutral-900" />
                </a>
              )}

              {hasLink(person.x) && (
                <a
                  href={person.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-black/10 bg-white/60 hover:bg-neutral-900 transition"
                >
                  <Twitter className="w-4 h-4 text-neutral-900" />
                </a>
              )}

              {hasLink(person.instagram) && (
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-black/10 bg-white/60 hover:bg-pink-500 transition"
                >
                  <Instagram className="w-4 h-4 text-neutral-900" />
                </a>
              )}

              {hasLink(person.website) && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-black/10 bg-white/60 hover:bg-purple-600 transition"
                >
                  <Globe className="w-4 h-4 text-neutral-900" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

function PeopleSection({ title, people }: { title: string; people: Person[] }) {
  return (
    <div className=" flex flex-col items-center gap-6">
      <h2 className="text-purple-600 font-semibold text-2xl sm:text-3xl">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {people.map((person, index) => (
          <PersonCard
            key={`${title}-${person.name}-${index}`}
            person={person}
          />
        ))}
      </div>
    </div>
  );
}

export default function People() {
  const [activeTeam, setActiveTeam] = useState<TeamKey>("Sponsorship");

  const people = useMemo(() => {
    return TEAMS[activeTeam].map((p) => ({
      ...p,
      color: TEAM_COLORS[activeTeam],
    }));
  }, [activeTeam]);

  return (
    <section className="bg-white px-4  border-t border-dashed border-black/20">
      <div className="max-w-6xl mx-auto pt-12  border-x border-b border-dashed border-black/20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Team
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-90 mx-auto">
            Meet the passionate individuals driving SheBuilds forward
          </p>
        </div>

        <DashedSection>
          <PeopleSection
            title="Co-Founders"
            people={COFOUNDERS.map((p) => ({
              ...p,
              color: TEAM_COLORS.CoFounders,
            }))}
          />
        </DashedSection>

        <DashedSection>
          <PeopleSection
            title="Bangalore Regional Head"
            people={REGIONAL_HEAD.map((p) => ({
              ...p,
              color: TEAM_COLORS.RegionalHead,
            }))}
          />
        </DashedSection>

        <DashedSection>
          <div className="pb-10 flex flex-col items-center gap-8">
            <h2 className="text-purple-600 font-semibold text-2xl sm:text-3xl">
              Core Team Members
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {(Object.keys(TEAMS) as TeamKey[]).map((team) => (
                <button
                  key={team}
                  onClick={() => setActiveTeam(team)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition
            ${activeTeam === team
                      ? "bg-black text-white"
                      : "bg-white border border-black/20 text-neutral-700 hover:bg-blue-200"
                    }`}
                >
                  {team}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap mx-auto max-w-5xl justify-center gap-8">
              {people.map((person, index) => (
                <PersonCard
                  key={`${activeTeam}-${person.name}-${index}`}
                  person={person}
                />
              ))}
            </div>
          </div>
        </DashedSection>
      </div>
    </section>
  );
}
