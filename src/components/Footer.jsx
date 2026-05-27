export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-luxury-onyx border-t border-luxury-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <h2 className="font-serif text-2xl text-luxury-ivory mb-1">
                Afrinaija Pots
              </h2>
            </div>
            <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed mb-6">
              Bringing authentic Nigerian cooking traditions to Kigali. Where
              culture, comfort, and bold West African flavors meet premium
              African hospitality.
            </p>
            <hr className="luxury-divider" />
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-luxury-gold font-sans font-medium mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Our Heritage", href: "#heritage" },
                { label: "Signature Menu", href: "#menu" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Reserve a Table", href: "#booking" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-luxury-ivory/50 hover:text-luxury-ochre transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-luxury-gold font-sans font-medium mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-luxury-ochre mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-luxury-ivory/70 font-sans">
                    40 KG 674 St, Kacyiru
                  </p>
                  <p className="text-sm text-luxury-ivory/70 font-sans">
                    Kigali, Rwanda
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-luxury-ochre shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+250782647630"
                  className="text-sm text-luxury-ivory/70 hover:text-luxury-gold transition-colors duration-300 font-sans"
                >
                  +250 782 647 630
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-luxury-ochre shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-luxury-ivory/70 font-sans">
                  Mon - Sun: 11:00 AM - 11:00 PM
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-luxury-gold font-sans font-medium mb-6">
              Visit Our Oasis
            </h3>
            <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed mb-6">
              Conveniently situated in the quiet, accessible diplomatic hub of
              Kacyiru. Dedicated parking space with round-the-clock security.
            </p>
            {/* Embedded map placeholder */}
            <div className="relative w-full aspect-[16/10] rounded overflow-hidden border border-luxury-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4889!2d30.0835!3d-1.9392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMjEuMSJTIDMwwrAwNScwMC42IkU!5e0!3m2!1sen!2srw!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Afrinaija Pots Restaurant location in Kacyiru, Kigali, Rwanda"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luxury-muted font-sans">
            &copy; {currentYear} Afrinaija Pots Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-luxury-muted font-sans">
            Authentic Nigerian Taste, Premium African Hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
