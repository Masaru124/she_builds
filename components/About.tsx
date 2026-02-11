"use client";

import Image from "next/image";

const values = [
  {
    title: "Turn Representation into Leadership",
    description:
      "From presence to power — enabling women to lead, influence, and drive change. SheBuilds provides mentorship programs, leadership workshops, and networking opportunities that help women transition from participants to decision-makers in the tech ecosystem.",
    stat: "63%",
    label: "Female Representation",
    icon: "👑",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Democratize Access to Resources",
    description:
      "Levelling the playing field with opportunities in tech, funding, mentorship, and growth. Through our initiatives, we've disbursed ₹5L+ in grants and support to women-led projects and startups.",
    stat: "₹5L+",
    label: "Grants Disbursed",
    icon: "⚡",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Build an Action-Oriented Sisterhood",
    description:
      "Building a bold, collaborative network of women who create, launch, and scale together. Our community of 10,000+ members spans across India and APAC regions.",
    stat: "10,000+",
    label: "Community Members",
    icon: "🤝",
    color: "from-green-500 to-teal-400",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-2 border-b border-dashed border-black/20"
    >
      <div className="max-w-6xl mx-auto relative z-10 border-x border-b border-dashed border-black/20">
        <div className="pt-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-semibold mb-10">
              We&apos;re{" "}
              <span className="bg-black font-[new] bg-clip-text text-transparent">
                Building
              </span>{" "}
              the Future
            </h1>
            <p className="mt-4 text text-gray-600 max-w-2xl mx-auto">
              A dynamic ecosystem empowering women in technology, leadership,
              and entrepreneurship
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <p className="text-gray-700 text leading-relaxed">
                    <strong className="font-bold text-gray-900">
                      SheBuilds
                    </strong>{" "}
                    is more than a community it&apos;s a movement. We foster a
                    collaborative environment where women grow as confident
                    creators, innovators, and leaders by providing essential
                    upskilling, mentorship, and access to opportunities.
                  </p>

                  <p className="text-gray-700 text leading-relaxed">
                    We believe that when women build, the future grows stronger.
                    Our ecosystem equips women with the tools, mentorship, and
                    support they need to thrive in tech, business, and beyond.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        63%
                      </div>
                      <div className="text-sm text-gray-600">
                        Leadership Roles
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        10K+
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Members
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        ₹5L+
                      </div>
                      <div className="text-sm text-gray-600">
                        Funds Deployed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={`/gallery/about.jpg`}
                  alt="about"
                  height={600}
                  width={600}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className={`
        group relative bg-white p-8
        border-y border-dashed border-black/20
        ${index !== values.length - 1 ? "md:border-r" : ""}
        md:border-dashed md:border-black/20
      `}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-4xl font-bold">{value.stat}</div>
                    <div className="text-sm font-medium text-gray-500 mt-1">
                      {value.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="max-w-6xl mx-auto">
            <div className=" border-black/20 px-6 text-center bg-purple-100 py-10">
              <h2 className="text-3xl font-semibold mb-6 text-black">
                Our Mission
              </h2>

              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                To empower women by building a collaborative ecosystem that
                nurtures upskilling, innovation, and mentorship enabling them to
                grow as confident creators, entrepreneurs, and changemakers.
              </p>

              <p className="text-xl font-semibold italic text-black">
                Built by her. Backed by boldness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
