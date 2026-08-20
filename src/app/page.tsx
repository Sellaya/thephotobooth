import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Gallery } from "@/components/sections/Gallery";
import { Products } from "@/components/sections/Products";
import { Events } from "@/components/sections/Events";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrustedBy />
        <Gallery />
        <Products />
        <Events />
        <Faq />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
