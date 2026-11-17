"use client";
import { useState } from "react";
import Ph from "./Ph";
import { faqs } from "@/lib/data";
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-mist px-5 py-16 md:px-10">
      <div className="flex justify-between"><h2 className="text-3xl font-semibold uppercase md:text-5xl">Frequently<br /><span className="opacity-45">asked</span> questions</h2><span className="text-sm">[ F.A.Q ]</span></div>
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <Ph src="/images/pro3.png" className="aspect-[4/3] rounded-3xl" />
        <div>{faqs.map((f, i) => (
          <div key={f.q} className="border-b border-forest py-4">
            <button className="flex w-full justify-between text-left text-sm font-semibold" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{f.q}</span><span>{open === i ? "⌃" : "⌄"}</span></button>
            {open === i && <p className="mt-3 text-sm text-black/60">{f.a}</p>}
          </div>))}
        </div>
      </div>
    </section>
  );
}
