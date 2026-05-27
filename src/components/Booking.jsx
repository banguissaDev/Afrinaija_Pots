"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

export default function Booking() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Food background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/catfish.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-luxury-onyx/[0.90]" />
      </div>
      <DecorativeShapes variant={3} />
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-luxury-ochre/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Secure Your Table</p>
          <hr className="luxury-divider mx-auto mb-8" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Dine with Us or Order{" "}
            <span className="italic text-luxury-ochre">Fresh</span> to Your Door
          </h2>
          <p className="text-luxury-ivory/55 font-sans max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Whether planning an intimate family dinner, a corporate lunch in
            Kacyiru, or wishing to enjoy authentic West African flavors at home,
            we make it simple.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Dine In */}
          <div className="reveal-left trust-card text-center flex flex-col items-center" style={{ transitionDelay: "0ms" }}>
            <div className="w-16 h-16 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-luxury-ivory mb-3">Dine In</h3>
            <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed mb-6">
              Experience the full Afrinaija Pots ambience. Warm lighting, premium hospitality, and the aroma of freshly prepared West African cuisine.
            </p>
            <a
              href="https://wa.me/250782647630?text=Hello%20Afrinaija%20Pots%2C%20I%20would%20like%20to%20reserve%20a%20table%20for%20dine-in."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-auto"
              id="booking-dinein-cta"
            >
              Reserve a Table
            </a>
          </div>

          {/* WhatsApp Order — Highlighted */}
          <div className="reveal trust-card text-center flex flex-col items-center border-luxury-ochre/30 relative" style={{ transitionDelay: "150ms" }}>
            {/* Highlight badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-luxury-ochre text-luxury-ivory text-[0.65rem] font-sans font-medium tracking-[0.15em] uppercase rounded-sm">
              Most Popular
            </div>

            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-6 animate-pulse-glow" style={{ "--tw-shadow-color": "rgba(37, 211, 102, 0.15)" }}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-luxury-ivory mb-3">Order on WhatsApp</h3>
            <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed mb-3">
              Get our full daily menu, ask about specials, and order fresh food directly to your location anywhere in Kigali.
            </p>
            <p className="text-lg font-sans font-semibold text-luxury-gold mb-6">
              +250 782 647 630
            </p>
            <a
              href="https://wa.me/250782647630?text=Hello%20Afrinaija%20Pots%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-auto"
              id="booking-whatsapp-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Message Us on WhatsApp</span>
            </a>
          </div>

          {/* Takeaway */}
          <div className="reveal-right trust-card text-center flex flex-col items-center" style={{ transitionDelay: "300ms" }}>
            <div className="w-16 h-16 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-luxury-ivory mb-3">Takeaway</h3>
            <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed mb-6">
              Enjoy our premium cuisine at home. Elegantly packaged in heat-sealed containers that keep every dish fresh and hot.
            </p>
            <a
              href="tel:+250782647630"
              className="btn-outline mt-auto"
              id="booking-takeaway-cta"
            >
              Call to Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
