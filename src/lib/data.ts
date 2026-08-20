export const siteConfig = {
  name: "The Photo Booth Company",
  tagline: "Strike a pose. Make a memory. Take it home.",
  phone: "+92 308 6464844",
  phoneHref: "tel:+923086464844",
  whatsapp: "https://wa.me/923086464844",
  email: "Hello@thephotoboothcompany.co",
  emailHref: "mailto:hello@thephotoboothcompany.co",
  instagram: "https://www.instagram.com/photobooth.co.pk/",
  instagramHandle: "@photobooth.co.pk",
  address: "Office 1, Phase-1 Block B DHA Phase 1, Lahore, 54000",
};

export const googleReviews = {
  rating: 5,
  count: 12,
  businessName: "The PhotoBooth Co.",
  shareUrl: "https://share.google/ATlyCeVSnD65ZCQ2A",
  mapsUrl: "https://www.google.com/maps?cid=13895684702721899304",
  reviewsUrl:
    "https://www.google.com/search?q=The+PhotoBooth+Co.&kgmid=/g/11nqxm9qb4#lrd=0x39190702fde18a63:0xc0937d1ad826bb28,1",
  writeUrl:
    "https://www.google.com/search?q=The+PhotoBooth+Co.&kgmid=/g/11nqxm9qb4#lrd=0x39190702fde18a63:0xc0937d1ad826bb28,3",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 500, suffix: "+", label: "Events Captured", icon: "camera" as const },
  { value: 5, suffix: "", label: "Average Rating", icon: "star" as const, showStar: true },
  { value: 4, suffix: "", label: "Booth Experiences", icon: "aperture" as const },
];

export const heroImages = [
  { src: "/images/hero/hero-1.jpg", alt: "Guest with photo booth prints", caption: "fresh prints!" },
  { src: "/images/hero/hero-2.jpg", alt: "Group of guests at an event", caption: "the crew, 2025" },
  { src: "/images/hero/hero-3.jpg", alt: "Wedding photo booth print", caption: "wedding day" },
];

export const features = [
  {
    icon: "camera",
    title: "Instant Prints",
    description:
      "Unlimited 4×6 prints and 2×6 photo strips, printed on the spot so every guest can take home a keepsake.",
  },
  {
    icon: "sparkle",
    title: "Fun Prop Box",
    description:
      "Hats, glasses, signs, and vintage frames — our prop box keeps every group shot playful.",
  },
  {
    icon: "cloud",
    title: "Online Gallery",
    description:
      "Every shot is uploaded to a private online gallery within 48 hours — free to download and share.",
  },
];

export const brands = [
  { name: "AirLink", file: "airlink.jpg" },
  { name: "Fatima Fertilizer", file: "fatima-fertilizer.jpg" },
  { name: "Pepsi", file: "pepsi.jpg" },
  { name: "Pizza Hut", file: "pizza-hut.jpg" },
  { name: "Hao Chi", file: "hao-chi.jpg" },
  { name: "LSE", file: "lse.jpg" },
  { name: "LUMS", file: "lums.jpg" },
  { name: "LGS", file: "lgs.jpg" },
  { name: "Beacon House", file: "beacon-house.jpg" },
  { name: "No Filter Coffee", file: "no-filter-coffee.jpg" },
  { name: "UMT", file: "umt.jpg" },
  { name: "Third Culture Coffee", file: "third-culture-coffee.jpg" },
  { name: "Taste Festival 2025", file: "taste-festival-2025.jpg" },
  { name: "The Padel Republic", file: "the-padel-republic.jpg" },
  { name: "Hifsa Khan Salon & Studio", file: "hifsa-khan-salon-amp-studio.jpg" },
  { name: "Kinnaird", file: "kinnaird.jpg" },
  { name: "MNR Design Studio", file: "mnr-design-studio.jpg" },
  { name: "TMUC", file: "tmuc.jpg" },
  { name: "Mashion", file: "mashion.jpg" },
  { name: "Aitchison College", file: "aitchison-college.jpg" },
];

export const galleryItems = [
  { label: "Wedding Reception", span: "big", image: "/images/hero/hero-3.jpg" },
  { label: "Corporate Gala", span: "small", image: "/images/products/360-video-booth.jpg" },
  { label: "Sweet 16", span: "small", image: "/images/hero/hero-1.jpg" },
  { label: "Birthday Bash", span: "wide", image: "/images/products/mirror-booth.jpg" },
  { label: "Holiday Party", span: "small", image: "/images/hero/hero-2.jpg" },
  { label: "Engagement", span: "small", image: "/images/products/vintage-booth.jpg" },
  { label: "Graduation", span: "wide", image: "/images/products/classic-booth.jpg" },
];

export const products = [
  {
    icon: "camera",
    title: "The Vintage Booth",
    description:
      "Bring a timeless, nostalgic touch to your celebration with our Vintage Booth. Its classic design makes it a beautiful addition to weddings and elegant events, while giving guests a fun way to capture and keep their favorite moments.",
    image: "/images/products/vintage-booth.jpg",
    badge: "Most Popular",
    featured: true,
  },
  {
    icon: "aperture",
    title: "The Classic Booth",
    description:
      "Our reliable, tried-and-tested photo booth with unlimited digital & print sessions and a clean, timeless setup for any event.",
    image: "/images/products/classic-booth.jpg",
    featured: false,
  },
  {
    icon: "orbit",
    title: "The 360 Video Booth",
    description:
      "A rotating platform that captures slow-motion panoramic videos, perfect for high-energy weddings and brand activations.",
    image: "/images/products/360-video-booth.jpg",
    featured: false,
  },
  {
    icon: "mirror",
    title: "The Mirror Booth",
    description:
      "Our Mirror Booth brings a touch of elegance and fun to every celebration. With its sleek full-length design and interactive experience, guests can pose, personalize, and instantly take home beautiful prints.",
    image: "/images/products/mirror-booth.jpg",
    featured: false,
  },
];

export const events = [
  {
    icon: "heart",
    title: "Weddings",
    description:
      "From first looks to last dances, we blend into your décor and keep guests smiling with keepsakes they take home.",
  },
  {
    icon: "building",
    title: "Brand Activations & Corporate Events",
    description:
      "Custom branded overlays, lead capture, and instant sharing for launches, conferences, and brand activations.",
  },
  {
    icon: "star",
    title: "Parties & Private Celebrations",
    description:
      "Birthdays, anniversaries, and holiday parties — with props, prints, and energy for a night everyone remembers.",
  },
];

export const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 4 to 6 weeks in advance for weddings and peak season dates. However, if your date is approaching sooner, feel free to reach out — we'll always do our best to accommodate last-minute bookings in Pakistan and the UAE, subject to availability.",
  },
  {
    question: "What's included in a booth rental?",
    answer:
      "Every rental includes your choice of photo booth, a dedicated on-site attendant, and a private digital gallery delivered after the event.",
  },
  {
    question: "Can we customize the print design?",
    answer:
      "Yes, every booking includes a custom photo strip design, tailored to match your event's theme, colors, and overall aesthetic.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Our team typically arrives 60 to 90 minutes before your event start time to set up and test the booth, so it's ready to go the moment guests arrive.",
  },
  {
    question: "When do we get our photos and videos?",
    answer:
      "A private online gallery with every digital photo, GIF, and 360° video is shared within 48 hours of your event — free to download and share.",
  },
  {
    question: "Do you travel outside Pakistan and the UAE?",
    answer:
      "We're based in Lahore, Pakistan, and Dubai, UAE, and serve events all across Pakistan and the UAE. We're also expanding to Toronto, Canada, and Sydney, Australia — ask us about travel for destination events elsewhere.",
  },
  {
    question:
      "Is the print quality different between the classic, vintage, and mirror booths?",
    answer:
      "No, the print quality and final output are the same across all three. The only difference is the design and appearance: each booth has a distinct look while delivering the same quality and experience.",
  },
  {
    question: "Do you offer event photography and videography?",
    answer:
      "Yes, we offer professional event photography and videography alongside our photo booth services. Please feel free to reach out, and our team will get back to you shortly.",
  },
];

export const testimonials = [
  {
    quote:
      "Had the experience of attending an event with a photobooth from the 'The Photobooth Co.' Safe to say we were all obsessed. The photos are such a cute keepsake and the person handling the equipment was extremely professional and sweet, we literally asked for a million copies of each photo and he graciously complied each time. Wonderful wedding favor concept that anyone who has the money for, should definitely go for!",
    name: "Momina Asif",
    rating: 5,
  },
  {
    quote:
      "We hired photobooth for our wedding and it was a huge hit! All of our guests couldn't stop talking about how much fun it was. The attendants were really sweet, and the photo quality was really nice. Thank you for helping make our day so special! Highly recommend to anyone looking to add some extra fun to their event!",
    name: "Ansa Kanwal",
    rating: 5,
  },
  {
    quote: "Spot on experience! Everything was great! Definitely worth it.",
    name: "Maham Bosan",
    rating: 5,
  },
  {
    quote:
      "Booked them for my wedding event and it was one of the best decisions during the whole process. Wedding keepsakes with the most special memories, love love the concept and would recommend everyone to book them!",
    name: "Zarwa Jafar",
    rating: 5,
  },
];

export const bookingHighlights = [
  "Readily available by phone",
  "Custom quotes for multi-day & brand launch events",
  "Serving all across Pakistan & the UAE",
  "Now expanding to Toronto, Canada & Sydney, Australia",
];

export const eventTypeOptions = [
  "Wedding",
  "Brand Activation / Corporate Event",
  "Birthday",
  "Anniversary",
  "Holiday Party",
  "Other",
];

export const packageOptions = [
  "Vintage Booth",
  "Classic Booth",
  "360 Video Booth",
  "Custom Setup",
];

export const contactItems = [
  {
    icon: "pin",
    title: "Lahore, Pakistan",
    description: "Call or WhatsApp +92 308 6464844 — available all across Pakistan",
  },
  {
    icon: "pin",
    title: "Dubai, UAE",
    description: "Available for events all across the UAE",
  },
  {
    icon: "pin",
    title: "Toronto, Canada & Sydney, Australia",
    description: "We're expanding — reach out to be first in line when we launch.",
    soon: true,
  },
  {
    icon: "mail",
    title: "Email",
    description: siteConfig.email,
    href: siteConfig.emailHref,
  },
];

export const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
  ],
  company: [
    { label: "Contact", href: "#contact" },
    { label: "FAQs", href: "#faq" },
    { label: "Book Now", href: "#booking" },
    { label: "Reviews", href: "#reviews" },
  ],
};
