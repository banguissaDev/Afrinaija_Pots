"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Authentic Nigerian Chefs",
    desc: "Our kitchen is directed by native chefs who master the precise balance of traditional West African spices and cooking methods.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Generous Portions",
    desc: "We believe in true African hospitality. Our satisfying, large portions leave you full, happy, and always wanting to return.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Vegetarian Options",
    desc: "Our menu caters to diverse dietary preferences with dedicated vegetarian-friendly options prepared with the same authentic care.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Family-Friendly Dining",
    desc: "A warm, welcoming space for families, couples, groups, and solo diners. Children are always welcome at our table.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Secure Parking",
    desc: "Conveniently located in Kacyiru with dedicated, secure parking space so you can dine with complete peace of mind.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Premium Hospitality",
    desc: "True African warmth paired with professional, attentive service. Every guest is treated like family from the moment they arrive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Cozy Atmosphere",
    desc: "A warm, sophisticated setting that blends modern comfort with traditional African charm for an unforgettable dining experience.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Prime Kigali Location",
    desc: "Nestled in the heart of Kacyiru near key embassies and ministries, easily accessible from anywhere in Kigali.",
  },
];

export default function WhyUs() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Food background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/ofada.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-luxury-onyx/[0.92]" />
      </div>
      <DecorativeShapes variant={3} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">The Afrinaija Difference</p>
          <hr className="luxury-divider mx-auto mb-8" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Why We Are the Best African Restaurant in{" "}
            <span className="italic text-luxury-ochre">Kigali</span>
          </h2>
          <p className="text-luxury-ivory/55 font-sans max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            More than a restaurant — a destination where authentic Nigerian
            heritage, premium hospitality, and generous portions come together
            to create an experience worth returning to.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className="reveal value-card"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-luxury-gold/20 text-luxury-gold mb-6 transition-all duration-500 group-hover:border-luxury-gold/50">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-luxury-ivory mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
