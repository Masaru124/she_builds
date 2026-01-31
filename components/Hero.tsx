"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Masonry from "./Masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "#",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "#",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "#",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1016/600/700?grayscale",
    url: "#",
    height: 450,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1018/600/850?grayscale",
    url: "#",
    height: 520,
  },
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current?.children,
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
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50">
      {/* floating glow blobs */}
      <div className="absolute -top-32 -left-32 w-105 h-105 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-105 h-105 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Text */}
        <div ref={textRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font font-semibold tracking-tight text-neutral-900 max-w-4xl mx-auto">
            Building an ecosystem for <span className="font-[new] font-bold "><i>women</i></span>{" "}
            who build in Bangalore
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            SheBuilds Bangalore is a community-led space for learning,
            collaboration, and growth across tech, design, startups, and beyond.
          </p>
        </div>

        {/* Masonry */}
        <div className="relative mt-24 pb-100">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            // animateFrom="bottom"
            scaleOnHover
            hoverScale={0.96}
            blurToFocus
            colorShiftOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
