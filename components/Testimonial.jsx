"use client";
import { useState } from "react";
import Ph from "./Ph";
import { testimonials } from "@/lib/data";
export default function Testimonial() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="px-5 py-16 md:px-10">
      <p className="text-sm">[ TESTIMONIAL ]</p>
      <blockquote className="mt-8 max-w-4xl text-xl font-semibold md:text-2xl">{t.quote}</blockquote>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3"><Ph src={t.img} className="h-14 w-14 rounded-full" /><div><p className="font-semibold uppercase">{t.name}</p><p className="text-sm text-black/55">{t.role}</p></div></div>
        <div className="flex gap-4 text-2xl"><button aria-label="Previous" onClick={() => go(-1)}>‹</button><button aria-label="Next" onClick={() => go(1)}>›</button></div>
      </div>
    </section>
  );
}
