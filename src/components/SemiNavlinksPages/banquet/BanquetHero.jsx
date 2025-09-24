import React from "react";

const details = {
  name: "Silver Arcade Premier",
  address: "Rathbari More, Ward No. 24, Malda, West Bengal 732101",
  phone: "+91 3512 000 000",
  email: "events@silverarcadepremier.com",
  website: "https://silverarcadepremier.com",
};

const BanquetHero = () => {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-14 md:py-20 bg-white text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900">
          Confer, Convene, Celebrate
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2 text-gray-500">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em]">
            Classy corporate meets, joyous social gatherings
          </span>
        </div>
        <div className="max-w-4xl mx-auto mt-8 space-y-5 leading-relaxed text-[15px] md:text-base font-light text-gray-600">
          <p>
            Silver Arcade Premier has long been a preferred address in Malda for
            memorable meetings and celebrations. Conferences, product launches,
            family milestones and board meetings can be hosted with confidence
            in our thoughtfully designed indoor venues and terrace spaces —
            supported by elegant décor, curated cuisines, modern audio‑visual
            and attentive event specialists.
          </p>
          <p>
            The moment of arrival is a statement: a warm lobby, refined
            chandeliers and a gracious service ritual. Intuitive service and
            precise technical support ensure that every agenda stays on track
            while guests feel genuinely cared for.
          </p>
          <p>
            Our largest hall comfortably hosts up to ~400 guests for socials or
            ~220 theatre‑style for conferences, with flexible partitions for
            multiple breakouts. Terrace gatherings add open‑air charm to
            sangeets, cocktails and sundowner receptions.
          </p>
        </div>
        <div className="mt-7">
          <a
            href={"/contact"}
            className="inline-block rounded-full border border-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default BanquetHero;
