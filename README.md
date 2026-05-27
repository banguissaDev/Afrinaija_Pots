# Afrinaija Pots Restaurant — Modern Luxury Web Experience
**Location:** Kacyiru, Kigali, Rwanda  
**Brand Positioning:** *"Authentic Nigerian Taste, Premium African Hospitality"*

A digital masterpiece crafted for **Afrinaija Pots Restaurant**, a premier dining establishment offering authentic Nigerian and West African culinary heritage in Kigali. This website is designed to project contemporary African luxury, combining high-converting UX principles, modern typography, glassmorphism, and subtle micro-animations.

---

## 📖 Table of Contents
1. [Brand Identity & Strategy](#-brand-identity--strategy)
2. [Key Website Features](#-key-website-features)
3. [Design System & Aesthetics](#-design-system--aesthetics)
4. [Component Architecture](#-component-architecture)
5. [Local SEO & Schema Markup](#-local-seo--schema-markup)
6. [Project Structure](#-project-structure)
7. [Getting Started](#-getting-started)

---

## 🎨 Brand Identity & Strategy

Afrinaija Pots sits at the intersection of cultural preservation and contemporary African luxury. The platform is built upon four foundational pillars:
- **Uncompromising Authenticity:** Showcasing dishes prepared by native Nigerian chefs using genuine ingredients sourced directly from West Africa.
- **Elevated African Hospitality:** Reimagining the traditional "home-away-from-home" feeling through highly attentive, professional service.
- **Culinary Storytelling:** Treating West African food as a historic, premium, and sensory art form.
- **Modern Heritage Aesthetics:** Utilizing Yoruba and Igbo design motifs (Uli & Adire) in a sophisticated, minimalist manner that feels state-of-the-art.

---

## ✨ Key Website Features

- **Immersive Split-Hero Page:** Features a responsive layout, micro-data review badges, and a custom mouse-following ochre glow overlay.
- **Interactive Signature Menu Showcase:** Tabbed menu interface categorized into:
  - *The Rice Collection:* Slow-simmered Signature Jollof Rice, Ofada Rice, Coconut Rice, etc.
  - *Traditional Soups:* Egusi, Okro (Ila Alasepo), Ogbono, Vegetable (Efo Riro), Oha, and Afang.
  - *The Pepper Soup Experience:* Succulent Catfish, Tilapia, Goat Meat, Chicken, and Assorted Pepper Soups.
  - *Nigerian Comfort Meals:* Honey Beans & Sweet Plantains (Ewa Agoyin), Yam Pottage (Asaro), and Potato Pottage.
  - *Proteins & Sides:* Flame-grilled Goat Meat (Asun Style), Stewed Beef, and Pan-Seared Fish.
- **Auto-Advancing Testimonials:** A polished slider highlighting customer reviews (4.8 average rating from 900+ reviews).
- **Three-Tier Booking System:** Clean Call-to-Action cards for Dine-In reservations, WhatsApp ordering (with pre-filled text templates), and Takeaway orders.
- **Dark-Themed Contact Footer:** Incorporates operating hours, location details, local directions, and a custom dark-styled interactive Google Maps iframe.
- **WhatsApp Chat Float:** A fixed-position floating action button in the bottom corner of the viewport for direct customer access.

---

## 💎 Design System & Aesthetics

### Color Palette
- **Luxury Onyx/Midnight (`#111111`):** The rich base of our dark luxury theme, providing deep contrast and high-end elegance.
- **Luxury Coal (`#1A1A1A`):** The primary background tone for UI cards, borders, and structured section breaks.
- **Heritage Ochre (`#C86A3C`):** Terracotta tone representing the red soil of West Africa and traditional clay cooking pots.
- **Imperial Gold (`#D4AF37`):** Metallic gold accent used sparingly for highlights, icons, active indicators, and borders.
- **Warm Ivory (`#FAF6F0`):** An organic background tone for high-contrast sections, keeping readability high.
- **Forest Green (`#1E3F20`):** Subtle organic tone representing fresh vegetable leaves used in traditional soups.

### Typography
- **Headings:** `Playfair Display` (Google Fonts) — Editorial, wide-spaced serif font communicating prestige.
- **Body & Buttons:** `Inter` (Google Fonts) — Clean, legible geometric sans-serif for system text and descriptions.

### Animations & Transitions
- Custom keyframe animations configured via Tailwind CSS:
  - `fadeIn`, `fadeInUp`, `fadeInLeft`, `fadeInRight`: Used to transition page elements smoothly on mount and scroll.
  - `float`: Continuous hovering animation for scroll indicators and micro-elements.
  - `pulseGlow`: Slow pulsing shadow ring surrounding the primary WhatsApp contact buttons.
  - Intersection Observer utilities (`.reveal`, `.reveal-left`, `.reveal-right` classes) that slide and fade content into place as the user scrolls.

---

## 🧱 Component Architecture

All components reside in `src/components/` and are built as lightweight, modular React components:
- **`Navbar.jsx`:** A glassmorphic header that dynamically transitions between transparent and blur backgrounds based on window scroll. Includes an animated mobile menu overlay.
- **`Hero.jsx`:** Immersive split layouts with integrated background visuals, a mouse-position interactive light effect, and call-to-actions.
- **`Story.jsx`:** Details the history and mission of Afrinaija Pots with a three-column value highlight (Spices, Chefs, Portions).
- **`MenuShowcase.jsx`:** Supports seamless state transitions across five menu tabs, showing/hiding recipe cards with smooth entrance delays.
- **`WhyUs.jsx`:** A clean grid outlining key competitive advantages: Authentic Chefs, Generous Portions, Cozy & Secure Setting, and Effortless Ordering.
- **`Testimonials.jsx`:** Interactive review slider showcasing customer quotes, star ratings, and custom-styled review marks.
- **`Booking.jsx`:** Houses conversion-focused pathways pointing directly to reservation or ordering forms.
- **`Footer.jsx`:** A four-column luxury footer displaying operational timing, addresses, map navigation, and social handles.
- **`WhatsAppFloat.jsx`:** High-priority floating element that stays accessible during scroll.

---

## 🔍 Local SEO & Schema Markup

To maximize search ranking for West African dining in East Africa, the project integrates local SEO configurations.

### Target Keywords
- **Primary:** `Nigerian restaurant Kigali`, `West African food Kigali`, `Nigerian food Rwanda`
- **Secondary:** `Best African restaurant Kigali`, `Jollof rice Kigali`, `Pepper soup Kigali`, `Authentic Nigerian cuisine Kigali`
- **Hyper-Local:** `African restaurant near Kacyiru`, `dine-in Kacyiru Kigali`

### JSON-LD Structured Data
Embedded directly inside `src/app/layout.js` to feed search engines structured restaurant details:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Afrinaija Pots Restaurant",
  "description": "Authentic Nigerian and West African cuisine in Kacyiru, Kigali. Premium hospitality, traditional recipes by native Nigerian chefs.",
  "telephone": "+250782647630",
  "url": "https://afrinaijapots.com",
  "servesCuisine": ["Nigerian", "West African", "African"],
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "40 KG 674 St",
    "addressLocality": "Kacyiru, Kigali",
    "addressCountry": "RW"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-1.9392",
    "longitude": "30.0835"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "900"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "11:00",
    "closes": "23:00"
  }
}
```

---

## 📂 Project Structure

```text
afrinaija/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg              # Hero background image
│   │   ├── restaurant-interior.jpg  # Interior view in Story section
│   │   └── menu/
│   │       └── egusi.jpg            # Signature Egusi soup image
│   │       └── catfish.jpg          # Point & Kill Catfish pepper soup image
│   └── favicon.ico                  # Site favicon
├── src/
│   ├── app/
│   │   ├── layout.js                # Global metadata, font configurations, and JSON-LD schema
│   │   ├── page.js                  # Homepage rendering all page components
│   │   └── globals.css              # Theme tokens, custom scrollbars, keyframe definitions, and patterns
│   └── components/
│       ├── Navbar.jsx               # Header & responsive mobile menu
│       ├── Hero.jsx                 # Dynamic header panel & hover-glows
│       ├── Story.jsx                # Brand story section
│       ├── MenuShowcase.jsx         # Tabbed foods system with custom grid entries
│       ├── WhyUs.jsx                # Key brand attributes grid
│       ├── Testimonials.jsx         # Reviews carousel
│       ├── Booking.jsx              # Reservation & order CTAs
│       ├── Footer.jsx               # Bottom details & dark mode Google Maps
│       └── WhatsAppFloat.jsx        # Float-on-scroll chat icon
├── package.json                     # Project dependencies & script definitions
└── jsconfig.json                    # Path aliases config (@/* maps to ./src/*)
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js (v18.x or higher)** and **npm** installed.

### ⚙️ Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd afrinaija
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### 💻 Running Locally
To launch the project in development mode:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 🏗️ Building for Production
To build a highly optimized production bundle:
```bash
npm run build
```
To run the production bundle locally:
```bash
npm run start
```
