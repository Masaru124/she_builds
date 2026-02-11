"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type Person = {
  name: string;
  image: string;
  linkedin?: string;
  instagram?: string;
};

type TeamKey = "Sponsorship" | "Web" | "Design" | "Media" | "Marketing";

const TEAMS: Record<TeamKey, Person[]> = {
  Sponsorship: [
    {
      name: "Aastha",
      image: "/gallery/aastha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Harsh",
      image: "/gallery/harsh.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Pia",
      image: "/gallery/pia.jpeg",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Web: [
    {
      name: "Bichitra",
      image: "/gallery/bichitra.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Matharishwa",
      image: "/gallery/matha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    // {
    //   name: "Khushi",
    //   image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Khushi",
    //   linkedin: "#",
    //   instagram: "#",
    // },
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
      instagram: "#",
    },
    {
      name: "Moulya",
      image: "/gallery/amulya.jpeg",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Media: [
    {
      name: "Vivan",
      image: "/gallery/vivan.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sachin",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Sachin",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Marketing: [
    {
      name: "Tathagat",
      image: "/gallery/thatagat.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Naman",
      image: "/gallery/naman.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Lohitha",
      image: "/gallery/lohitha.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Erum",
      image: "/gallery/erum.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Faiza",
      image: "/gallery/faiza.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Khushi",
      image: "/gallery/khushi.jpeg",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Bharath",
      image: "/gallery/bharath.jpeg",
      linkedin: "#",
      instagram: "#",
    },
  ],
};

const PersonCard = React.memo(function PersonCard({
  person,
}: {
  person: Person;
}) {
  return (
    <div className="w-80 flex flex-col overflow-hidden rounded-xl bg-white border border-black/20 group transition hover:border-black/30">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="bg-black text-white text-center">
        <h3 className="text-lg font-semibold py-3">{person.name}</h3>

        <div className="flex border-t border-dashed border-white/30">
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border-r border-dashed border-white/30 text-sm hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          )}

          {person.instagram && (
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default function People() {
  const [activeTeam, setActiveTeam] = useState<TeamKey>("Sponsorship");
  const people = useMemo(() => TEAMS[activeTeam], [activeTeam]);

  return (
    <section className="bg-white px-2 border-b border-dashed border-black/20">
      <div className="max-w-6xl mx-auto px-6 py-12 border-x border-b border-dashed border-black/20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Team</h1>
          <p className="text-gray-600">
            Meet the passionate individuals driving SheBuilds forward
          </p>
        </div>

        <div className="pb-20 flex flex-col items-center gap-4">
          <h2 className="text-purple-600 font-semibold text-xl">
            Bangalore Regional Head
          </h2>

          <div className="w-80 flex flex-col overflow-hidden rounded-xl bg-white border border-dashed border-black/20 group transition hover:border-black/30">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/gallery/trisha.jpeg"
                alt="Trisha"
                fill
                sizes="320px"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="bg-black text-white text-center">
              <h3 className="text-lg font-semibold py-3">Trisha</h3>

              <div className="flex border-t border-dashed border-white/30">
                <a
                  href="#"
                  className="w-full py-3 border-r border-dashed border-white/30 text-sm hover:bg-white hover:text-black transition"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="w-full py-3 text-sm hover:bg-white hover:text-black transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(TEAMS) as TeamKey[]).map((team, index) => (
            <button
              key={index}
              onClick={() => setActiveTeam(team)}
              className={`px-4 py-2 rounded text-sm font-medium transition
                ${
                  activeTeam === team
                    ? "bg-black text-white"
                    : "bg-white border border-dashed border-black/20 text-neutral-700 hover:bg-blue-200"
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
    </section>
  );
}
