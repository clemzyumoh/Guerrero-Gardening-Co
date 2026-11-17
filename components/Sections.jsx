import Link from "next/link";
import Ph from "./Ph";
import { values, steps } from "@/lib/data";
export const G = ({ children }) => <span className="opacity-45">{children}</span>;
export const H = ({ children, className = "" }) => <h2 className={`text-3xl font-semibold uppercase leading-tight md:text-5xl ${className}`}>{children}</h2>;
export const Tag = ({ children }) => <span className="text-sm">[ {children} ]</span>;
export function Hero({ title, crumb }) {
  return (
    <section className="relative flex h-[300px] items-end px-5 pb-8 text-white md:h-[380px] md:px-10">
      <Ph src="/images/abt1.png" className="absolute inset-0" /><div className="absolute inset-0 bg-black/35" />
      <div className="relative"><p className="mb-3 text-sm">Home | {crumb}</p><h1 className="text-4xl font-bold uppercase md:text-6xl">{title}</h1></div>
    </section>
  );
}
export function Values({ light = true }) {
  return (
    <section
      className={`px-5 py-16 md:px-10 ${light ? "" : "bg-forest text-white"}`}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Tag>VALUES</Tag>
          <H className="mt-10">
            We are <G>different</G>
            <br />
            in every way
          </H>
        </div>
        <div className="w-full md:w-80">
          {["Landscape Design", "Indoor Garden"].map((x, i) => (
            <div
              key={x}
              className="flex justify-between border-b border-current/40 py-2 text-sm">
              <span>{x}</span>
              <span>0{i + 1}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={`mt-4 block py-3 text-center text-sm font-semibold ${light ? "bg-forest text-white" : "bg-white text-forest"}`}>
            Get started
          </Link>
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_2fr]">
        <Ph
          src="/images/home1.png"
          alt="Front yard garden"
          className="aspect-[3/4] rounded-3xl md:aspect-auto md:min-h-[560px]"
        />
      
        <div className="grid content-end gap-10 s sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="shadow p-4 rounded-3xl">
              <span className="mb-4 grid h-12 w-12 place-items-center  rounded-lg bg-mist text-forest">
                {v.icon}
              </span>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm opacity-65">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Steps() {
  return (
    <section className="bg-moss px-5 py-16 text-white md:px-10">
      <div className="flex justify-between"><H>Simple steps for<br />our <G>landscape</G> work</H><Tag>HOW IT WORKS</Tag></div>
      <ol className="mt-14 grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (<li key={s.t} className={i % 2 ? "md:mt-20" : ""}><h3 className="font-semibold">0{i + 1} | {s.t}</h3><p className="mt-2 text-sm opacity-65">{s.d}</p></li>))}
      </ol>
    </section>
  );
}
export function CtaCard({ title = "Make your dream garden into a reality" }) {
  return (
    <section className="px-5 py-10 md:px-10">
      <Ph src="/images/abt4.png" className="flex min-h-[320px] items-end rounded-3xl p-6 md:min-h-[430px] md:p-10"><div className="absolute inset-0 bg-black/30" />
        <div className="relative"><h2 className="max-w-2xl text-3xl font-bold uppercase text-white md:text-5xl">{title}</h2><Link href="/contact" className="btn-light mt-6">Contact us</Link></div>
      </Ph>
    </section>
  );
}
