"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teams = {
  Sponsorship: [
    {
      name: "Aastha",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      linkedin: "https://linkedin.com/in/aastha",
      instagram: "https://instagram.com/aastha",
    },
    {
      name: "Harsh",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "https://linkedin.com/in/harsh",
      instagram: "https://instagram.com/harsh",
    },
    {
      name: "Pia",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      linkedin: "https://linkedin.com/in/pia",
      instagram: "https://instagram.com/pia",
    },
  ],
  Web: [
    {
      name: "Bichitra",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      linkedin: "https://linkedin.com/in/aarav",
      instagram: "https://instagram.com/aarav",
    },
    {
      name: "Matharishwa",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      linkedin: "https://linkedin.com/in/isha",
      instagram: "https://instagram.com/isha",
    },
    {
      name: "Khushi",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      linkedin: "https://linkedin.com/in/kunal",
      instagram: "https://instagram.com/kunal",
    },
  ],

  Design: [
    {
      name: "Raksha",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/raksha",
      instagram: "https://instagram.com/raksha",
    },
    {
      name: "Moulika",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      linkedin: "https://linkedin.com/in/moulika",
      instagram: "https://instagram.com/moulika",
    },
    {
      name: "Moulya",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedin: "https://linkedin.com/in/moulya",
      instagram: "https://instagram.com/moulya",
    },
  ],

  Media: [
    {
      name: "Vivan",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      linkedin: "https://linkedin.com/in/vivan",
      instagram: "https://instagram.com/vivan",
    },
    {
      name: "Sachin",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      linkedin: "https://linkedin.com/in/sachin",
      instagram: "https://instagram.com/sachin",
    },
  ],

  Marketing: [
    {
      name: "Tathagat",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      linkedin: "https://linkedin.com/in/tathagat",
      instagram: "https://instagram.com/tathagat",
    },
    {
      name: "Naman",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
      linkedin: "https://linkedin.com/in/naman",
      instagram: "https://instagram.com/naman",
    },
    {
      name: "Lohitha",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      linkedin: "https://instagram.com/lohitha",
      instagram: "https://instagram.com/lohitha",
    },
    {
      name: "Erum",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      linkedin: "https://linkedin.com/in/erum",
      instagram: "https://instagram.com/erum",
    },
  ],
};

const People = () => {
  const [activeTeam, setActiveTeam] = useState<keyof typeof teams>("Sponsorship");

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals driving the SheBuilds community
            forward
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(teams).map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team as keyof typeof teams)}
                className={`px-4 py-2 text-sm font-medium rounded transition
          ${
            activeTeam === team
              ? "bg-purple-600 text-white shadow"
              : "bg-purple-50 text-purple-700 hover:bg-purple-100"
          }`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teams[activeTeam].map((person, index) => (
            <div
              key={index}
              className="group bg-white w-70 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {person.name}
                </h3>


                {/* Social icons */}
                <div className="flex justify-center gap-3">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <FaLinkedinIn size={14} />
                    </a>
                  )}

                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition"
                    >
                      <FaInstagram size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
