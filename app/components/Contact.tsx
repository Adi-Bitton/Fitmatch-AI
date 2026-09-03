"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CONTACT } from "@/app/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `היי, הגעתי דרך אתר FITMATCH AI

שם: ${name}
טלפון: ${phone}
הודעה: ${message}`;
    window.open(
      `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const field =
    "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-right text-foreground outline-none transition-colors placeholder:text-faint focus:border-violet focus:bg-white/[0.06]";

  return (
    <section id="contact" className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <div className="panel px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="text-center">
          <p className="kicker justify-center">צור קשר</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            נשמח לשמוע מכם
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[820px] gap-4 sm:grid-cols-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center gap-4 p-5 transition-colors hover:border-violet/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet-light">
              <FaWhatsapp className="text-xl" />
            </span>
            <span className="text-right">
              <span className="block text-xs text-faint">וואטסאפ / טלפון</span>
              <span dir="ltr" className="block font-semibold text-foreground">
                {CONTACT.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center gap-4 p-5 transition-colors hover:border-violet/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet-light">
              <FaInstagram className="text-xl" />
            </span>
            <span className="text-right">
              <span className="block text-xs text-faint">אינסטגרם</span>
              <span dir="ltr" className="block font-semibold text-foreground">
                {CONTACT.instagramHandle}
              </span>
            </span>
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 max-w-[820px] space-y-4"
        >
          <h3 className="text-center text-lg font-bold text-foreground">
            ניתן גם לכתוב לנו
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="שם"
              className={field}
            />
            <input
              type="tel"
              required
              dir="rtl"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="מספר טלפון"
              className={field}
            />
          </div>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="גוף ההודעה"
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            className="cta-primary w-full rounded-full px-8 py-4 font-semibold text-white transition-transform duration-200 hover:scale-[1.01]"
          >
            שליחה בוואטסאפ
          </button>
        </form>
      </div>
    </section>
  );
}
