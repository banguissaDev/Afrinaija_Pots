"use client";

import { useState, useRef, useEffect } from "react";
import DecorativeShapes from "@/components/DecorativeShapes";

const faqs = [
  {
    question: "Where is Afrinaija Pots located in Kigali?",
    answer: "We are located at 40 KG 674 St, Kacyiru, Kigali, Rwanda. Our restaurant features secure parking and a warm, elegant dining atmosphere.",
  },
  {
    question: "What type of food does Afrinaija Pots serve?",
    answer: "We serve authentic Nigerian and West African cuisine. Our menu includes classics like signature smoky Jollof Rice, traditional Egusi soup, fiery Pepper Soup, and a variety of carefully prepared protein options.",
  },
  {
    question: "Does Afrinaija Pots deliver food in Kigali?",
    answer: "Yes, we offer fast and reliable delivery anywhere in Kigali. You can easily place your order by messaging us directly on WhatsApp at +250 782 647 630.",
  },
  {
    question: "What are the best Nigerian dishes to try?",
    answer: "If it's your first time, we highly recommend our Signature Jollof Rice with plantains, the deeply comforting Egusi Soup with pounded yam, or our authentic Assorted Meat Pepper Soup.",
  },
  {
    question: "What are the opening hours?",
    answer: "We are open Monday through Sunday, from 11:00 AM to 11:00 PM, ready to serve you premium West African flavors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
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
    <section ref={sectionRef} id="faq" className="relative py-24 lg:py-36 bg-luxury-coal border-t border-luxury-border overflow-hidden">
      <DecorativeShapes variant={2} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Questions & Answers</p>
          <hr className="luxury-divider mx-auto mb-8" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Frequently Asked <span className="italic text-luxury-ochre">Questions</span>
          </h2>
        </div>

        <div className="space-y-4 reveal" style={{ transitionDelay: "150ms" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-luxury-border rounded-md overflow-hidden bg-luxury-onyx/50 transition-all duration-300 hover:border-luxury-gold/30"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="font-serif text-lg text-luxury-ivory">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 text-luxury-gold ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-luxury-ivory/60 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
