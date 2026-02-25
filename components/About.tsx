"use client";

import Image from "next/image";

const values = [
  {
    title: "Turn Representation into Leadership",
    description:
      "From presence to power — enabling women to lead, influence, and drive change. SheBuilds provides mentorship programs, leadership workshops, and networking opportunities that help women transition from participants to decision-makers in the tech ecosystem.",
    stat: "63%",
    label: "Female Representation",
  },
  {
    title: "Democratize Access to Resources",
    description:
      "Levelling the playing field with opportunities in tech, funding, mentorship, and growth. Through our initiatives, we've disbursed ₹5L+ in grants and support to women-led projects and startups.",
    stat: "₹5L+",
    label: "Grants Disbursed",
  },
  {
    title: "Build an Action-Oriented Sisterhood",
    description:
      "Building a bold, collaborative network of women who create, launch, and scale together. Our community of 10,000+ members spans across India and APAC regions.",
    stat: "10,000+",
    label: "Community Members",
  },
];

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t border-dashed border-black/20">
    {children}
  </div>
);

const About = () => {
  return (
    <section className="bg-white px-4 border-black/20">
      <div className="max-w-6xl mx-auto border-x border-b border-dashed border-black/20">
        <Row>
          <div className="py-12  text-center max-w-3xl mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 leading-tight">
              We&apos;re{" "}
              <span className="bg-black font-[new] bg-clip-text text-transparent">
                Building
              </span>{" "}
              the Future
            </h1>

            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A dynamic ecosystem empowering women in technology, leadership,
              and entrepreneurship
            </p>
          </div>
        </Row>

        <Row>
          <div className="px-6 sm:px-8 py-14 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">

              <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-900">SheBuilds</strong> is more
                  than a community it&apos;s a movement. We foster a collaborative
                  environment where women grow as confident creators,
                  innovators, and leaders.
                </p>

                <p>
                  We believe that when women build, the future grows stronger.
                  Our ecosystem equips women with tools, mentorship, and support
                  to thrive in tech and beyond.
                </p>

                {/* Better mobile layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                      63%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Leadership Roles
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                      10K+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Active Members
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                      ₹5L+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Funds Deployed
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <Image
                  src="/gallery/about.jpg"
                  alt="about"
                  height={600}
                  width={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Row>

        {/* CORE VALUES */}
        <Row>
          <div className="py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Our Core Values
            </h2>
          </div>
        </Row>

        <div className="grid md:grid-cols-3 border-t border-dashed border-black/20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`px-6 sm:px-8 py-12 sm:py-14 border-b border-dashed border-black/20 ${index !== values.length - 1 ? "md:border-r" : ""
                }`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                {value.description}
              </p>

              <div className="pt-6 border-t border-gray-100">
                <div className="text-3xl sm:text-4xl font-bold">
                  {value.stat}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  {value.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MISSION */}
        <Row>
          <div className="text-center bg-purple-100 py-16 sm:py-20 px-6 sm:px-10">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black">
              Our Mission
            </h2>

            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              To empower women by building a collaborative ecosystem that
              nurtures upskilling, innovation, and mentorship.
            </p>

            <p className="text-lg sm:text-xl font-semibold italic text-black">
              Built by her. Backed by boldness.
            </p>
          </div>
        </Row>

      </div>
    </section>
  );
};

export default About;