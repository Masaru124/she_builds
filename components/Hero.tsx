"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img3.png",
  "/gallery/img4.png",
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!textRef.current) return;

    const elements = Array.from(textRef.current.children) as HTMLElement[];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
    );
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative overflow-hidden bg-white px-4 border-b border-dashed border-black/20">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/60 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-300/50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 text-center border-x border-dashed border-black/20">
        <div ref={textRef}>
          <h1 className="mx-auto max-w-4xl text-3xl font-light tracking-tight text-neutral-900 sm:text-5xl md:text-5xl">
            Building an ecosystem for{" "}
            <span className="font-semibold italic text-purple-600">women</span>{" "}
            who build in{" "}
            <span className="underline decoration-purple-600 decoration-wavy underline-offset-8">
              Bangalore
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            SheBuilds Bangalore is a community-led space for learning,
            collaboration, and growth across tech, design, startups, and beyond.
          </p>
        </div>

        <div className="relative mt-14 mx-auto w-full max-w-4xl">
          <div className="relative h-100 md:h-120 overflow-hidden rounded-lg">
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt="Event gallery"
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
