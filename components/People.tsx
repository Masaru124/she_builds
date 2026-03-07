"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Linkedin, Globe } from "lucide-react";

import { Person } from "@/types/Person";

import { COFOUNDERS, TEAMS, TEAM_COLORS, TeamKey } from "@/data/PeopleData";

function DashedSection({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto py-6">{children}</div>;
}

const PersonCard = React.memo(function PersonCard({
  person,
}: {
  person: Person;
}) {
  return (
    <div className="w-80 p-3 group">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="208px"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-100"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div className="pt-3 px-0.5">
          <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
            {person.name}
          </h3>

          {person.role && (
            <p className="text-xs text-neutral-500 mt-0.5">{person.role}</p>
          )}
        </div>
        <div className="">
          <div className="flex items-center gap-1.5 mt-2.5">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black/50"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black/50"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

function PeopleSection({ people }: { people: Person[] }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
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
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto pt-8 px-6">
        {/* Header */}
        <div className="text-left mb-6">
          <h1 className="text-4xl sm:text-5xl font-[new] font-bold text-gray-900 mb-2">
            The Team
          </h1>
          <p className=" text-gray-600 mx-auto">
            The people who organize events, manage grants, and keep things
            running
          </p>
        </div>

        <DashedSection>
          <PeopleSection
            people={COFOUNDERS.map((p) => ({
              ...p,
              color: TEAM_COLORS.CoFounders,
            }))}
          />
        </DashedSection>

        <DashedSection>
          <div className="pb-6 flex flex-col items-center gap-5">
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.keys(TEAMS) as TeamKey[]).map((team) => (
                <button
                  key={team}
                  onClick={() => setActiveTeam(team)}
                  className={`px-4 py-2 rounded text-xs font-medium transition
                  ${
                    activeTeam === team
                      ? "bg-black text-white"
                      : "bg-white border border-black/20 text-neutral-700 hover:bg-blue-200"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap mx-auto max-w-7xl justify-center gap-4">
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
