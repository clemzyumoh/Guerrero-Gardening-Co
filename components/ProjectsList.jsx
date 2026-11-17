"use client";
import { useState } from "react";
import Ph from "./Ph";
import { projects } from "@/lib/data";
const cats = ["All", "Garden", "Plants", "Landscape", "Others"];
export default function ProjectsList() {
  const [cat, setCat] = useState("All");
  const [az, setAz] = useState(true);
  const list = projects.filter((p) => cat === "All" || p.cat === cat).sort((a, b) => (az ? a.title.localeCompare(b.title) : 0));
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forest/60 px-5 py-8 md:px-10">
        <button onClick={() => setAz(!az)} className="text-sm font-semibold">Sort by A - Z {az ? "(on)" : "(off)"}</button>
        <div className="flex gap-6 text-sm">{cats.map((c) => <button key={c} onClick={() => setCat(c)} className={cat === c ? "underline" : "opacity-70"}>{c}</button>)}</div>
      </div>
      {list.map((p, i) => (
        <article key={p.title} className={`flex flex-col gap-6 border-b border-forest/60 px-5 py-12 md:items-center md:gap-8 md:px-10 ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <Ph src={p.img} alt={p.title} className="aspect-[3/2] w-full rounded-3xl md:w-1/2" />
          <div className="md:w-1/2"><h3 className="text-4xl font-semibold uppercase md:text-5xl">{p.title}</h3>
            <dl className="mt-10 flex flex-wrap gap-8 text-sm">{[["Year", p.year], ["Location", p.location], ["Service", p.service]].map(([k, v]) => <div key={k}><dt className="uppercase opacity-55">{k}</dt><dd className="font-semibold uppercase">{v}</dd></div>)}</dl></div>
        </article>))}
      {!list.length && <p className="px-5 py-16 md:px-10">No projects in this category yet.</p>}
    </section>
  );
}
