import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuShowcase from "@/components/MenuShowcase";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Story />
        <MenuShowcase />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
