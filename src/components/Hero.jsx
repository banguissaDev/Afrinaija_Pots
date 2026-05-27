"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };

    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Authentic Nigerian Jollof Rice with plantains at Afrinaija Pots Restaurant Kigali"
          fill
          className="object-cover"
          sizes="100vw"
          priority={true}
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-onyx/95 via-luxury-onyx/75 to-luxury-onyx/50" />
        {/* Warm ochre glow that follows mouse */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(200,106,60,0.5), transparent 70%)",
            left: "calc(50% + var(--mouse-x))",
            top: "calc(50% + var(--mouse-y))",
            transform: "translate(-50%, -50%)",
            transition: "left 0.6s ease-out, top 0.6s ease-out",
          }}
        />
      </div>

      {/* Decorative subtle geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          viewBox="0 0 400 800"
          fill="none"
          aria-hidden="true"
        >
          <line x1="50" y1="0" x2="50" y2="800" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="150" y1="0" x2="150" y2="800" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="250" y1="0" x2="250" y2="800" stroke="#D4AF37" strokeWidth="0.5" />
          <line x1="350" y1="0" x2="350" y2="800" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="200" cy="400" r="150" stroke="#C86A3C" strokeWidth="0.5" />
          <circle cx="200" cy="400" r="250" stroke="#C86A3C" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          {/* Tagline removed */}

          {/* SEO H1 Text */}
          <h1 className="sr-only">Authentic Nigerian Restaurant in Kigali — Jollof, Egusi & Pepper Soup</h1>
          
          {/* Main visual Headline */}
          <p className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-up" aria-hidden="true">
            A Culinary Journey to the{" "}
            <span className="italic text-luxury-ochre">Heart</span> of West
            Africa
          </p>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-luxury-ivory/70 leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200 font-sans">
            Experience the rich, bold, and comforting flavors of traditional
            Nigerian cuisine. Prepared by master chefs, served with premium
            hospitality in Kacyiru, Kigali.
          </p>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3 animate-fade-in-up delay-400">
            <a
              href="https://wa.me/250782647630?text=Hello%20Afrinaija%20Pots%2C%20I%20would%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="hero-reserve-cta"
            >
              <span>Reserve a Table</span>
            </a>
            <a href="#menu" className="btn-outline" id="hero-menu-cta">
              Explore Our Menu
            </a>
            <a
              href="https://wa.me/250782647630?text=Hello%20Afrinaija%20Pots%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id="hero-whatsapp-cta"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust micro-data */}
          <div className="mt-14 flex items-center gap-8 animate-fade-in delay-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? "text-luxury-gold" : "text-luxury-gold/50"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-luxury-ivory/60 font-sans">
                4.8 Rating
              </span>
            </div>
            <div className="w-px h-5 bg-luxury-border" />
            <span className="text-sm text-luxury-ivory/60 font-sans">
              900+ Reviews
            </span>
            <div className="w-px h-5 bg-luxury-border hidden sm:block" />
            <span className="text-sm text-luxury-ivory/60 font-sans hidden sm:block">
              Kacyiru, Kigali
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-muted font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-luxury-ochre to-transparent" />
      </div>
    </section>
  );
}
