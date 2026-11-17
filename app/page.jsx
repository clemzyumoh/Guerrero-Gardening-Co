import Link from "next/link";
import Image from "next/image";
import Ph from "@/components/Ph";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { G, H, Tag, Values, Steps } from "@/components/Sections";
import { services, projects } from "@/lib/data";
export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[640px] flex-col justify-end px-5 pb-10 text-white md:min-h-[740px] md:px-10">
        {/* <Ph className="absolute inset-0" /> */}
        <Ph
          src="/images/herog.png"
          alt="Front yard garden"
          width={1920}
          height={1080}
          sizes="100vw"
          quality={100}
          priority
          className="absolute inset-0"
        />
        {/* <image
         src="/images/herog.png"
          alt="Front yard garden"
          width={1920}
          height={1080}
          sizes="100vw"
          quality={100}
          priority
          className="absolute inset-0"
        /> */}
        <div className="absolute inset-0 bg-black/35" />
        <Navbar />
        <div className="absolute right-10 top-28 hidden w-56 border border-white/50 p-5 md:block">
          <p className="text-2xl font-semibold">500+</p>
          <p className="text-white/70">Satisfied clients</p>
        </div>
        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold uppercase leading-tight md:text-7xl">
              Create your dream garden
            </h1>
            <p className="mt-4 text-sm">
              Garden design with passion and creativity, from an experienced
              team of landscape artists and gardeners.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <Link href="/contact" className="btn-light">
                Get started
              </Link>
              <Link href="/projects" className="text-sm underline">
                Explore projects
              </Link>
            </div>
          </div>
          <div className="hidden w-80 rounded-3xl bg-white/20 p-5 backdrop-blur md:block">
            <p className="font-semibold">Featured garden</p>
            <p className="mt-1 text-sm">
              A recent landscape we designed and planted, from first sketch to
              final bloom.
            </p>
          </div>
        </div>
      </section>
      <Values />
      <Steps />
      <section className="px-5 py-16 md:px-10">
        <div className="flex justify-between">
          <Tag>SERVICES</Tag>
          <Link href="/services" className="text-sm underline">
            See more services
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="block">
              <Ph
                src={s.img}
                alt={s.title}
                className="flex aspect-[3/4] items-end rounded-3xl p-5 text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm">{s.desc}</p>
                </div>
              </Ph>
            </Link>
          ))}
        </div>
      </section>
      <div className="bg-mist">
        <Testimonial />
      </div>
      <section className="px-5 py-16 md:px-10">
        <div className="flex justify-between">
          <H>
            Get to know our
            <br />
            <G>latest</G> garden works
          </H>
          <Tag>WORKS</Tag>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
          <div>
            <Ph className="aspect-[16/10] rounded-3xl" src={projects[0].img} />
            <p className="mt-4 text-sm">
              <b>{projects[0].title}</b>, {projects[0].location}
            </p>
          </div>
          <Ph
            className="hidden aspect-[3/4] rounded-3xl md:block"
            src={projects[1].img}
          />
        </div>
      </section>
      <section className="relative px-5 py-20 text-white md:px-10">
        <Ph src="/images/tg.png" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <h2 className="max-w-xl text-4xl font-semibold uppercase md:text-5xl">
            Ready to transform your garden?
          </h2>
          <Link href="/contact" className="btn-light mt-6">
            Contact us
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
