import { notFound } from "next/navigation";
import Ph from "@/components/Ph";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import { G, Steps, CtaCard } from "@/components/Sections";
import { services } from "@/lib/data";
const features = [
  "Customized designs",
  "Maintenance plans",
  "Soil testing and improvement",
  "Hardscape and aquascape features",
  "Plant selection and installation",
  "Sustainable, eco-friendly options",
];
export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }));
export default function Service({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const [first, ...rest] = s.title.split(" ");
  return (
    <>
      <div className="relative h-24">
        <Navbar dark />
      </div>
      <section className="px-5 md:px-10">
        <p className="text-sm">Home | Services | {s.title}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-[1.8fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold uppercase md:text-6xl">
              <G>{first}</G> {rest.join(" ")}
            </h1>
            <Ph
              src={s.img}
              alt={s.title}
              className="mt-6 grid aspect-video place-items-center rounded-3xl">
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white">
                ▶
              </span>
            </Ph>
          </div>
          {/* <Ph
            src="/images/service.png"
            className="aspect-[3/4] rounded-3xl md:aspect-auto"
          /> */}
          <Ph
            src={s.img2}
            alt={`${s.title} detail`}
            className="aspect-[3/4] rounded-3xl md:aspect-auto"
          />
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.8fr_1fr]">
          <div className="space-y-5 text-sm leading-relaxed text-black/65">
            <p>
              {s.desc} Every project starts with a conversation about how you
              want to use your space, then moves to a clear plan with materials,
              plants and timing.
            </p>
            <p>
              Our landscape designers and horticulturists work together so the
              result looks good on day one and keeps looking good as it grows.
              We use water saving methods and plants suited to your climate.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <li
                key={f}
                className={`rounded-xl p-4 text-sm font-medium ${i === 3 ? "bg-forest text-white" : "bg-[#cfdcd8]"}`}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="mt-16">
        <Steps />
      </div>
      <Testimonial />
      <CtaCard />
      <Footer />
    </>
  );
}
