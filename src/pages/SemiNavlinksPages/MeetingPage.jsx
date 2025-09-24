import React from "react";
import BanquetHero from "../../components/SemiNavlinksPages/banquet/BanquetHero";
import BanquetIntro from "../../components/SemiNavlinksPages/banquet/BanquetIntro";
import BanquetHighlights from "../../components/SemiNavlinksPages/banquet/BanquetHighlights";
import BanquetShowcase from "../../components/SemiNavlinksPages/banquet/BanquetShowcase";
import HotelSnapshot from "../../components/SemiNavlinksPages/banquet/HotelSnapshot";
import BanquetRooms from "../../components/SemiNavlinksPages/banquet/BanquetRooms";
import FinalCTA from "../../components/SemiNavlinksPages/banquet/FinalCTA";

const highlightCards = [
  {
    tag: "Silver Arcade Premier, Malda",
    title: "A Culture of Splendour",
    description:
      "Our venues reflect Malda’s gracious spirit — contemporary chandeliers, rich textures and warm palettes paired with intuitive layouts. From pre-function lounges to pillar‑less halls, every space is crafted to honour tradition while embracing modern event design.",
    img: "/images/sap/culture.jpg",
  },
  {
    tag: "Silver Arcade Premier",
    title: "Vibrant, Diverse Venues",
    description:
      "From an intimate board meeting of 12 to a social celebration of 400, our configurable rooms adapt with ease. Movable partitions, generous ceiling heights and natural light ensure comfort, while seamless breakouts extend to terraces and lobby lounges.",
    img: "/images/sap/venues.jpg",
  },
  {
    tag: "Culinary Crafts",
    title: "Much‑Awarded, Much‑Loved Cuisines",
    description:
      "Curated menus balance global favourites with regional signatures like Malda mango delicacies. Live stations, prix‑fixe courses or grand buffets — our chefs tailor every detail to your theme, dietary preferences and service style.",
    img: "/images/sap/cuisine.jpg",
  },
  {
    tag: "Responsible Celebrations",
    title: "Responsible Banquets",
    description:
      "We champion greener gatherings: season‑forward menus, low‑waste planning, glass water service, linen reuse options and energy‑efficient lighting. Partner with us to host celebrations that are elegant, thoughtful and planet‑positive.",
    img: "/images/sap/green.jpg",
  },
  {
    tag: "Event Specialists",
    title: "A Dedicated Team",
    description:
      "Your vision, meticulously delivered. Our planners orchestrate timelines, layouts, AV, décor and vendor coordination, while our service team ensures gracious hospitality throughout. Expect proactive checklists and calm, expert execution.",
    img: "/images/sap/team.jpg",
  },
];

const roomTypes = [
  {
    name: "Deluxe Room",
    desc:
      "Elegant 260–300 sq ft rooms with queen/king bedding, work desk, lounging chair, LED TV, tea/coffee maker, minibar and high‑speed Wi‑Fi. Ideal for quick city stopovers or delegate stays.",
  },
  {
    name: "Executive Deluxe",
    desc:
      "Spacious layout with enhanced storage, premium linens and upgraded bath amenities. Perfect for longer business trips and family stays requiring extra comfort.",
  },
  {
    name: "Suite",
    desc:
      "Separate living area, bedroom privacy and a city‑view window bay. Includes complimentary evening amenities, garment pressing and turndown on request.",
  },
];

const amenities = [
  "Banquet hall & pre‑function lobby",
  "Boardroom with conferencing AV",
  "Specialty dining: Masala Zone & NH‑16",
  "Cocktails & Dreams bar & lounge",
  "Rooftop terrace (private soirées)",
  "High‑speed Wi‑Fi throughout",
  "24‑hour front desk & concierge",
  "Laundry & express pressing",
  "On‑call spa/therapies and salon tie‑ups",
  "Ample parking & valet",
];

const services = [
  "Tailored event planning & décor liaison",
  "Custom menus (veg, non‑veg, Jain, kids)",
  "Live counters & theme buffets",
  "Wedding & social packages",
  "Corporate day‑conference packages",
  "Airport/railway transfer assistance",
  "Early check‑in/late check‑out (subject to availability)",
];

export default function MeetingsEventsSAP() {
  return (
    <main className="font-['Helvetica Neue'] text-gray-800">
      <BanquetHero />
      <BanquetIntro />
      <BanquetHighlights />
      <BanquetShowcase />
      <HotelSnapshot />
      <BanquetRooms />
      <FinalCTA />
    </main>
  );
}
