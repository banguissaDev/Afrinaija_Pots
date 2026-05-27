"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

const testimonials = [
  {
    quote:
      "As a Nigerian living in Rwanda, finding authentic food was my biggest challenge until I discovered Afrinaija Pots. The Jollof Rice has that genuine smoky party flavor, and the portions are incredibly generous. The packaging is clean, modern, and keeps the food piping hot. Highly recommended for anyone craving true West African cuisine.",
    name: "Chinedu O.",
    title: "Kigali Resident",
    rating: 5,
  },
  {
    quote:
      "The customer service here is exceptional. They welcomed us with true African warmth, and the chef came out to ask how we enjoyed the Egusi. The space is clean, cozy, has plenty of secure parking, and the Assorted Meat Pepper Soup is genuinely out of this world. We will definitely be returning.",
    name: "Clarisse U.",
    title: "Kigali Food Guide",
    rating: 5,
  },
  {
    quote:
      "Whether we dine in or order on WhatsApp for home delivery, the quality is always consistent. The food is delivered fast, packaged elegantly, and tastes exactly like the dishes I enjoyed during my travels to Lagos. This is without doubt the best Nigerian restaurant in Kigali.",
    name: "Marcus T.",
    title: "International Tourist",
    rating: 5,
  },
  {
    quote:
      "I brought my entire family here for a Sunday lunch and we were all blown away. The children loved the Fried Rice, my wife could not stop praising the Egusi, and I personally fell in love with the Goat Meat Pepper Soup. The portions are so large we even took some home. Wonderful experience.",
    name: "Emmanuel A.",
    title: "Family Diner",
    rating: 5,
  },
  {
    quote:
      "I have tried many African restaurants across East Africa but Afrinaija Pots stands apart. The authenticity is unmistakable — you can taste the difference when real Nigerian chefs prepare the food with genuine spices. The Ofada Rice and Sauce was a revelation. Five stars, always.",
    name: "Amina K.",
    title: "Food Enthusiast",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Food background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/goat-pepper.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-luxury-onyx/[0.93]" />
      </div>
      <DecorativeShapes variant={1} />
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-ochre/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">The Afrinaija Experience</p>
          <hr className="luxury-divider mx-auto mb-8" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Trusted by Over{" "}
            <span className="text-luxury-gold">900</span> Food Lovers in Kigali
          </h2>
          <p className="text-luxury-ivory/55 font-sans max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Don&rsquo;t just take our word for it. Here is why locals, travelers,
            and families choose Afrinaija Pots for their culinary cravings.
          </p>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 border border-luxury-gold/20 rounded-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="w-5 h-5 text-luxury-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-sans text-luxury-ivory/80 font-medium">
              4.8 Average Rating
            </span>
            <span className="text-luxury-muted">|</span>
            <span className="text-sm font-sans text-luxury-ivory/60">
              900+ Reviews
            </span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="trust-card relative">
            {/* Quote mark */}
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>

            <div className="pt-8 pl-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${s <= t.rating ? "text-luxury-gold" : "text-luxury-border"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg lg:text-xl text-luxury-ivory/80 font-serif leading-relaxed mb-8 transition-opacity duration-500">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-ochre/20 flex items-center justify-center text-luxury-ochre font-serif text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-luxury-ivory">
                    {t.name}
                  </p>
                  <p className="text-xs font-sans text-luxury-muted">
                    {t.title} &bull; Verified Dining Customer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={current === idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-luxury-gold w-8"
                    : "bg-luxury-border hover:bg-luxury-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
