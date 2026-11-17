import Link from "next/link";
import Ph from "@/components/Ph";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero, CtaCard } from "@/components/Sections";
import { services } from "@/lib/data";
export const metadata = { title: "Services | leaflife" };
export default function Services() {
  return (
    <>
      <div className="relative"><Navbar /><Hero title="Our services" crumb="Services" /></div>
      <section className="grid gap-4 px-5 py-14 md:grid-cols-2 md:px-10">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`}>
            <Ph src={s.img} alt={s.title} className="flex aspect-[16/10] items-end rounded-3xl p-6 text-white"><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="relative"><h2 className="text-2xl font-semibold uppercase md:text-3xl">{s.title}</h2><p className="mt-2 max-w-lg text-sm">{s.desc}</p></div></Ph>
          </Link>))}
      </section>
      <CtaCard title="Ready to design your garden?" />
      <Footer />
    </>
  );
}
