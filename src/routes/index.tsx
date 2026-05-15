import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/lume/Navbar";
import { Hero } from "@/components/lume/Hero";
import { About } from "@/components/lume/About";
import { Services } from "@/components/lume/Services";
import { Gallery } from "@/components/lume/Gallery";
import { Testimonials } from "@/components/lume/Testimonials";
import { WhyUs } from "@/components/lume/WhyUs";
import { Booking } from "@/components/lume/Booking";
import { Contact } from "@/components/lume/Contact";
import { Footer } from "@/components/lume/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lume Salon — Luxury Unisex Salon in Vadakara, Kerala" },
      {
        name: "description",
        content:
          "Lume Salon — Vadakara's premier luxury unisex salon for hair, skin, bridal makeup, keratin, facials and spa. 5.0 ★ Google rated.",
      },
      { property: "og:title", content: "Lume Salon — Luxury Unisex Salon in Vadakara" },
      {
        property: "og:description",
        content:
          "Premium beauty & grooming experience in Vadakara, Kerala. Hair, skin, bridal, spa & more.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <WhyUs />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
