"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

export default function Story() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "The Spices",
      desc: "Sourced directly from West Africa for unmatched authenticity in every dish.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "The Chefs",
      desc: "Native culinary artisans maintaining generational recipes with care and passion.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "The Portions",
      desc: "Generously served in a warm, upscale atmosphere that feels like home.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Food background image */}
      <div className="absolute inset-0">
        <Image
          src="/naija_shapes.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-luxury-onyx/[0.92]" />
      </div>
      <DecorativeShapes variant={2} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section: Image + Text */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative aspect-[4/5] rounded overflow-hidden">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Afrinaija Pots Restaurant warm interior dining ambience in Kacyiru Kigali"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative gold border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-luxury-gold/20 rounded pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <p className="section-label mb-4">Our Heritage</p>
            <hr className="luxury-divider mb-8" />

            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-8">
              Authentic Nigerian Food in Kigali Meets{" "}
              <span className="italic text-luxury-ochre">Modern Soul</span>
            </h2>

            <p className="text-luxury-ivory/65 leading-relaxed mb-10 font-sans text-base lg:text-lg">
              Afrinaija Pots brings the bold, unfiltered flavors of West Africa to Kigali. 
              Led by native Nigerian chefs using hand-selected spices and time-honored slow-cooking methods, 
              we serve more than just food&mdash;we deliver culture, connection, and the true taste of home 
              in every generous portion.
            </p>

            <a href="#menu" className="btn-primary">
              <span>Discover Our Menu</span>
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className="reveal value-card"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-luxury-ochre/30 text-luxury-ochre mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-luxury-ivory mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-luxury-ivory/55 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
