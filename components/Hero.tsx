"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/gallery/img1.png",
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

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


  return (
    <section className="relative overflow-hidden bg-white">
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/60 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-300/50 rounded-full blur-3xl" /> */}

      <div className="relative mx-auto px-6 pt-30 sm:pt-36 pb-16 sm:pb-20 text-center">
        <div ref={textRef}>
          <h1 className="mx-auto max-w-4xl text-3xl font-light tracking-tight text-neutral-900 sm:text-5xl md:text-5xl">
            Where{" "}
            <span className="font-semibold italic text-purple-600">women</span>{" "}
            ship real projects in{" "}
            <span className="underline decoration-purple-600 decoration-wavy underline-offset-8">
              Bangalore
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Workshops, grants, and build sessions for women in tech, design,
            and startups. Based in Bangalore, open to everyone ready to make things.
          </p>
        </div>

        <div className="relative mt-14 mx-auto w-full max-w-4xl">
          <div className="relative h-100 md:h-120 overflow-hidden">
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 `}
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

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
