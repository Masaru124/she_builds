"use client";

import Image from "next/image";

const values = [
  {
    title: "Hands-On Skill Building",
    description:
      "Structured mentorship programs and technical workshops that help women move from learning to leading. 63% of our active members have taken on leadership roles in their teams or projects after participating in our programs.",
    stat: "63%",
    label: "Members in Leadership Roles",
  },
  {
    title: "Direct Funding for Projects",
    description:
      "We fund women-led projects and early-stage startups through micro-grants. So far we have backed 20+ projects with ₹5L+ in total grants — small but growing, and 100% directed at work that ships.",
    stat: "20+",
    label: "Projects Funded",
  },
  {
    title: "A Network That Actually Builds",
    description:
      "10,000+ members across Bangalore and online. This isn't a mailing list — we run weekly build sessions, monthly demos, and quarterly hackathons where members collaborate on real products.",
    stat: "10,000+",
    label: "Members",
  },
];

const stats = [
  { number: "120+", label: "Events Held" },
  { number: "20+", label: "Projects Funded" },
  { number: "₹5L+", label: "Grants Disbursed" },
];

export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left py-20 mx-auto">
          <h1 className="text-4xl md:text-5xl font-[new] font-bold">
            What We&apos;ve{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Built
            </span>{" "}
            So Far
          </h1>

          <p className="text-gray-600 mt-6 text">
            Workshops, grants, and build programs here’s where we are and where
            we’re headed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div className="space-y-6 text-gray-700 text leading-relaxed">
            <p>
              <strong className="text-black">SheBuilds Bangalore</strong> runs
              workshops, funds projects, and connects women working in tech,
              design, and startups. We focus on output things you can demo,
              ship, or launch.
            </p>

            <p>
              Members get mentorship, weekly build sessions, and micro-grants to
              help ship real products. The focus is simple: build things that
              matter.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-purple-600">
                    {s.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/gallery/about.jpg"
              alt="about"
              width={600}
              height={600}
              className=" w-full object-cover"
            />
          </div>
        </div>

        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-[new] font-bold">
            Our Core Values
          </h2>
          <p className="text-gray-500 mt-4">
            Principles that guide how we build and grow the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 hover:border-purple-300 transition bg-white"
            >
              <h3 className="text-3xl font-[new] font-bold mb-4">{value.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-10">
                {value.description}
              </p>

              <div className="">
                <div className="text-4xl font-bold text-purple-600">
                  {value.stat}
                </div>
                <div className="text-sm text-gray-500 mt-1">{value.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
