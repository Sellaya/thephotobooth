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
import { googleReviews, siteConfig, testimonials } from "@/lib/data";

function GoogleReviewsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 1, Phase-1 Block B DHA Phase 1",
      addressLocality: "Lahore",
      postalCode: "54000",
      addressCountry: "PK",
    },
    url: googleReviews.shareUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviews.rating.toFixed(1),
      reviewCount: googleReviews.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
      },
      reviewBody: review.quote,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <GoogleReviewsJsonLd />
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
