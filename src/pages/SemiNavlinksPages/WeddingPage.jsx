import React from "react";
import { Link } from "react-router-dom";
const WeddingPage = () => {
  return (
    <div className="font-sans text-gray-800 max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-xl italic text-gray-600 mb-2 tracking-wide">
          Your Moment, Your Way
        </h2>
        <h1 className="text-5xl font-serif font-bold mb-6 tracking-tight">
          Weddings at Silver Arcade Premier
        </h1>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          Weddings at <strong>Silver Arcade Premier</strong> can be majestic,
          royal, contemporary, or intimate — and everything in between. With
          both indoor and outdoor venues, we specialize in personalizing,
          designing, and curating unforgettable wedding experiences in the heart
          of Malda, West Bengal.
        </p>
        <Link to={'/contact'} className="mt-6 px-8 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
          Get in Touch
        </Link>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 my-12 w-24 mx-auto" />

      {/* The Perfect Wedding Destination */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Wedding Hall"
          className="rounded-lg shadow-lg object-cover w-full h-80"
        />
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">
            The Perfect Wedding Destination
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Whether it’s an intimate celebration or a lavish gathering, our
            spaces are designed to impress. Stunning décor, customizable
            settings, and our award-winning culinary expertise ensure that every
            celebration becomes a cherished memory.
          </p>
          <Link to={"/reservation"} className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Book Now
          </Link>
        </div>
      </section>

      {/* A Culture of Splendour */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">
            A Culture of Splendour
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Silver Arcade Premier, we honor the rich cultural heritage of
            Bengal while embracing modern sophistication. Our wedding venues
            celebrate vibrant traditions, music, and customs, while offering
            world-class hospitality.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Culture Splendour"
          className="rounded-lg shadow-lg object-cover w-full h-80"
        />
      </section>

      {/* Vibrant, Diverse Venues */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDB8MHx8fDA%3D"
          alt="Outdoor Venue"
          className="rounded-lg shadow-lg object-cover w-full h-80"
        />
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">
            Vibrant, Diverse Venues
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From intimate gatherings to extravagant weddings of up to 800+
            guests, our versatile banquet halls and lush outdoor lawns adapt to
            your dream setup. Each venue can be fully customized — from décor
            and lighting to floral arrangements and themes.
          </p>
        </div>
      </section>

      {/* Much Awarded, Much Loved Cuisines */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">
            Much Awarded, Much Loved Cuisines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From regional Bengali delicacies to global gourmet spreads, our
            chefs curate menus that reflect both tradition and innovation. Be it
            multi-course fine dining or custom buffets, your wedding feast will
            leave every guest delighted.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHwwfDB8fHww"
          alt="Cuisine"
          className="rounded-lg shadow-lg object-cover w-full h-80"
        />
      </section>

      {/* A Dedicated Team */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <img
          src="https://plus.unsplash.com/premium_photo-1677529498680-fdb9d5ee762a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRlYW18ZW58MHwwfDB8fHww"
          alt="Team Support"
          className="rounded-lg shadow-lg object-cover w-full h-80"
        />
        <div>
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wide">
            A Dedicated Team
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our experienced wedding planners handle everything — from invites
            and décor to entertainment and logistics. With meticulous attention
            to detail, we ensure a seamless experience for you and your guests.
          </p>
        </div>
      </section>

      {/* Final Section with overlay */}
      <section
        className="relative h-[60vh] rounded-lg overflow-hidden mb-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705738641188-787f3703b05d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wide">
            Venues That Leave You Spellbound
          </h2>
          <p className="mb-6 max-w-xl leading-relaxed">
            Exchange vows under the open skies, amidst elegant lawns and stunning
            décor, at Silver Arcade Premier — Malda’s ultimate wedding
            destination.
          </p>
          {/* <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Know More
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default WeddingPage;
