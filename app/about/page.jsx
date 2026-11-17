import Ph from "@/components/Ph";
import image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero, H, G, Tag, Values, CtaCard } from "@/components/Sections";
import { team } from "@/lib/data";
export const metadata = { title: "About | leaflife" };
export default function About() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero title="About us" crumb="About" />
      </div>
      <section className="px-5 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <H>
            Crafting
            <br />
            <G>dream gardens</G>
            <br />
            into reality
          </H>
          <p className="max-w-md text-sm text-black/55">
            At Guerrero Gardening Co. we are passionate about turning outdoor
            spaces into gardens with a story. For over a decade we have worked
            from a shared love of nature and design, one garden at a time.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_2.2fr]">
          <Ph
            src="/images/abt3.png"
            className="grid aspect-video place-items-center rounded-2xl md:aspect-auto md:min-h-[260px]">
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white">
              ▶
            </span>
          </Ph>
          <Ph src="/images/abt2.png" className="aspect-video rounded-2xl" />
        </div>
      </section>
      <Values light={false} />
      <section className="px-5 py-16 md:px-10">
        <div className="flex justify-between">
          <H>
            Our team
            <br />
            <G>of</G> dedication
          </H>
          <Tag>TEAM</Tag>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {team.map((m) => (
            <Ph
              key={m.name}
              src={m.img}
              alt={m.name}
              className="flex aspect-[3/4] items-end rounded-2xl p-4 text-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative">
                <p className="font-semibold">{m.name}</p>
                <p className="text-xs">{m.role}</p>
              </div>
            </Ph>
          ))}
        </div>
      </section>
      <section className="bg-mist px-5 py-12 md:px-10">
        {/* <p className="text-sm">
          Replace with client logos (use Ph or next/image).
        </p> */}
        <div className="flex">
          <image
            src="/images/logo1.png"
            alt="Client logos"
            width={8}
            height={10}
            className="mx-auto max-w-full"
          />
          <image
            src="/images/logo2.png"
            alt="Client logos"
            width={8}
            height={10}
            className="mx-auto max-w-full"
          />
          <image
            src="/images/logo3.png"
            alt="Client logos"
            width={8}
            height={10}
            className="mx-auto max-w-full"
          />
          <image
            src="/images/logo4.png"
            alt="Client logos"
            className="mx-auto max-w-full"
          />
        </div>
      </section>
      <section className="px-5 py-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
          <div className="self-center">
            <Tag>GALLERY</Tag>
            <H className="mt-6">
              Our <G>work</G>
            </H>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Ph
              src="/images/service4.png"
              className="row-span-2 aspect-[3/5] rounded-xl"
            />
            <Ph
              src="/images/service3.png"
              className="aspect-[3/4] rounded-xl"
            />
            <Ph
              src="/images/service2.png"
              className="row-span-2 aspect-[3/5] rounded-xl"
            />
            <Ph
              src="/images/service1.png"
              className="aspect-[3/4] rounded-xl"
            />
          </div>
        </div>
      </section>
      <CtaCard />
      <Footer />
    </>
  );
}
