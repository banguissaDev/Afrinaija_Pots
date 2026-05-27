"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

const categories = [
  {
    id: "rice",
    label: "Rice Collection",
    intro: "The undisputed centerpiece of West African feasts. Slow-cooked, deeply flavored, and always served in satisfying portions.",
    items: [
      {
        name: "Signature Jollof Rice",
        desc: "Long-grain rice slow-simmered in a rich, smoky reduction of plum tomatoes, red peppers, sweet onions, and scotch bonnets. Served with caramelized plantains and your choice of protein.",
        image: "/images/menu/jollof.jpg",
        tag: "Signature",
      },
      {
        name: "Rice & Stew with Plantain",
        desc: "Fluffy white rice paired with a rich, savory West African tomato and pepper stew, slow-cooked in palm oil. Served with sweet fried plantains.",
        image: "/images/menu/rice-stew.jpg",
      },
      {
        name: "Fried Rice (Nigerian Style)",
        desc: "A colorful rice dish stir-fried with sweet carrots, green peas, liver bits, sweet corn, and a blend of curry, thyme, and rich chicken stock.",
        image: "/images/menu/fried-rice.jpg",
      },
      {
        name: "Coconut Rice",
        desc: "Infused with rich, creamy coconut milk, this fragrant dish is simmered with smoked dried shrimp and local spices for a delicate tropical flavor.",
        image: "/images/menu/coconut-rice.jpg",
      },
      {
        name: "Concussion Rice",
        desc: "A rustic, home-style favorite. Rice cooked with palm oil, locust beans, dried fish, and stockfish for a deeply traditional, comforting taste.",
        image: "/images/menu/concussion-rice.jpg",
      },
      {
        name: "Ofada Rice & Sauce",
        desc: "Unpolished, fragrant short-grain rice with the legendary Ofada sauce — a spicy green pepper and locust bean stew with assorted meats.",
        image: "/images/menu/ofada.jpg",
        tag: "Traditional",
      },
      {
        name: "Rice with Pepper Soup",
        desc: "Fluffy steamed white rice served alongside a hot, restorative pepper soup broth — a perfect balance of clean grain and rich, spicy heat.",
        image: "/images/menu/rice-pepper-soup.jpg",
      },
    ],
  },
  {
    id: "soups",
    label: "Traditional Soups",
    intro: "Rich, textured, and deeply flavorful stews that form the core of Nigerian cuisine. Best enjoyed with hand-stretched swallows.",
    items: [
      {
        name: "Egusi Soup",
        desc: "Ground melon seeds steamed with fresh spinach, waterleaf, and palm oil, simmered with stockfish, smoked fish, and cow tripe.",
        image: "/images/menu/egusi.jpg",
        tag: "Popular",
      },
      {
        name: "Okro Soup (Ila Alasepo)",
        desc: "Fresh, finely chopped okra in a rich seafood broth with palm oil, prawns, crabs, dried fish, and aromatic local spices.",
        image: "/images/menu/okro.jpg",
      },
      {
        name: "Ogbono Soup",
        desc: "Ground African wild mango seeds slow-cooked in palm oil with bitter leaf, stockfish, and assorted meats for a smooth, savory texture.",
        image: "/images/menu/ogbono.jpg",
      },
      {
        name: "Vegetable Soup (Efo Riro)",
        desc: "A rich, dry Yoruba spinach stew in concentrated red pepper paste, fortified with locust beans, dried fish, and assorted tender meats.",
        image: "/images/menu/efo-riro.jpg",
      },
      {
        name: "Oha Soup",
        desc: "A traditional Eastern Nigerian delicacy made from fresh Oha leaves, thickened with cocoyam paste, and flavored with ogiri and dried fish.",
        image: "/images/menu/oha.jpg",
        tag: "Delicacy",
      },
      {
        name: "Afang Soup",
        desc: "A highly nutritious, dense soup from the Efik people, made from shredded Afang leaves and waterleaf, slow-cooked with periwinkles and palm oil.",
        image: "/images/menu/afang.jpg",
      },
    ],
  },
  {
    id: "pepper-soup",
    label: "Pepper Soup",
    intro: "Restorative, fiery, and deeply aromatic broths infused with native spices — calabash nutmeg, uziza seeds, and uda pods. Designed to warm the soul.",
    items: [
      {
        name: "Full Catfish Pepper Soup",
        desc: "Fresh catfish poached gently in our spicy, aromatic pepper soup broth, keeping the fish incredibly tender and succulent. A true Nigerian specialty.",
        image: "/images/menu/catfish.jpg",
        tag: "Chef's Pick",
      },
      {
        name: "Tilapia Pepper Soup",
        desc: "Fresh Tilapia simmered in a spiced herbal broth, releasing clean, light, and fiery flavors that refresh the palate.",
        image: "/images/menu/tilapia.jpg",
      },
      {
        name: "Goat Meat Pepper Soup",
        desc: "Tender chunks of bone-in goat meat slow-simmered in our spicy pepper broth until fall-off-the-bone tender.",
        image: "/images/menu/goat-pepper.jpg",
      },
      {
        name: "Chicken Pepper Soup",
        desc: "Light yet fiery broth infused with fresh ginger, garlic, and local pepper soup spices, loaded with tender marinated chicken pieces.",
        image: "/images/menu/chicken-pepper.jpg",
      },
      {
        name: "Beef Pepper Soup",
        desc: "Rich beef stock base infused with native spices, loaded with seasoned cubes of lean beef for a hearty experience.",
        image: "/images/menu/beef-pepper.jpg",
      },
      {
        name: "Assorted Meat Pepper Soup",
        desc: "For the true connoisseur. A fiery broth loaded with tripe, cow skin, and tender beef — the complete Nigerian pepper soup experience.",
        image: "/images/menu/assorted-pepper.jpg",
        tag: "Premium",
      },
    ],
  },
  {
    id: "comfort",
    label: "Comfort Meals",
    intro: "Hearty, warm, and nostalgic dishes that feel like a warm embrace from home.",
    items: [
      {
        name: "Beans & Plantains (Ewa Agoyin)",
        desc: "Slow-mashed honey beans with a rich, caramelized dark palm oil sauce made with crushed dried peppers and onions, paired with sweet fried plantains.",
        image: "/images/menu/beans.jpg",
        tag: "Classic",
      },
      {
        name: "Sweet Potato & Egg Sauce",
        desc: "Lightly boiled sweet potato wedges served with a vibrant, stir-fried tomato and onion egg sauce seasoned with fresh peppers.",
        image: "/images/menu/sweet-potato.jpg",
      },
      {
        name: "Irish Potato Pottage",
        desc: "A delicious one-pot meal of soft potatoes simmered in a seasoned tomato-palm oil sauce with fresh greens and smoked fish.",
        image: "/images/menu/potato-pottage.jpg",
      },
      {
        name: "Yam Pottage (Asaro)",
        desc: "Puna yam cubes slow-cooked in a seasoned tomato, pepper, and palm oil stock until partially mashed into a thick, comforting, savory stew.",
        image: "/images/menu/yam-pottage.jpg",
      },
    ],
  },
  {
    id: "proteins",
    label: "Proteins & Sides",
    intro: "Flame-grilled, slow-braised, or crispy fried to complement your meal perfectly.",
    items: [
      {
        name: "Goat Meat (Asun Style)",
        desc: "Tender, spiced goat meat tossed with habaneros and onions — smoky, spicy, and irresistible.",
        image: "/images/menu/goat.jpg",
        tag: "Spicy",
      },
      {
        name: "Crispy Fried Chicken",
        desc: "Seasoned with local Nigerian spices, fried to golden perfection with a satisfying crunch and juicy interior.",
        image: "/images/menu/chicken.jpg",
      },
      {
        name: "Slow-Stewed Beef",
        desc: "Tender beef cubes slow-cooked in a rich tomato gravy until fork-tender and deeply flavorful.",
        image: "/images/menu/beef.jpg",
      },
      {
        name: "Pan-Seared Fish",
        desc: "Crispy skin, juicy inside — marinated with local peppers, onions, and tomatoes for bold West African flavor.",
        image: "/images/menu/fish.jpg",
      },
    ],
  },
];

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState("rice");
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);

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

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Food background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/egusi.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-luxury-onyx/[0.93]" />
      </div>
      <DecorativeShapes variant={4} />
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-luxury-ochre/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Signature Menu</p>
          <hr className="luxury-divider mx-auto mb-8" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Explore Our{" "}
            <span className="italic text-luxury-ochre">Culinary</span>{" "}
            Collection
          </h2>
          <p className="text-luxury-ivory/55 font-sans max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Every dish tells a story of tradition, skill, and passion. Discover
            the rich diversity of Nigerian cuisine, from smoky Jollof feasts to
            restorative pepper soup broths.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="reveal mb-12">
          <div
            ref={tabsRef}
            className="flex overflow-x-auto gap-2 pb-4 border-b border-luxury-border scrollbar-hide justify-start lg:justify-center"
            role="tablist"
            aria-label="Menu categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeTab === cat.id}
                aria-controls={`panel-${cat.id}`}
                className={`menu-tab ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Intro */}
        <div
          key={activeCategory.id}
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
        >
          <p className="text-center text-luxury-ivory/50 font-sans italic mb-12 max-w-xl mx-auto">
            {activeCategory.intro}
          </p>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeCategory.items.map((item, idx) => (
              <article
                key={item.name}
                className="menu-card group"
                style={{
                  animation: `slideUp 0.5s ease-out ${idx * 80}ms both`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} — Authentic Nigerian dish at Afrinaija Pots Kigali`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-onyx/60 to-transparent" />
                  {item.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 text-[0.65rem] font-sans font-medium tracking-[0.15em] uppercase bg-luxury-ochre/90 text-luxury-ivory rounded-sm">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-lg text-luxury-ivory mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-luxury-ivory/50 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <a
            href="https://wa.me/250782647630?text=Hello%20Afrinaija%20Pots%2C%20I%20would%20like%20to%20see%20the%20full%20menu%20and%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            id="menu-order-cta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Order This on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
