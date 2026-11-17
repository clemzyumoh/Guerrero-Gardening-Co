import Link from "next/link";
import { services } from "@/lib/data";
import Logo from "./Logo";
export default function Footer() {
  const cols = [
    ["Support", ["FAQ", "User guide", "Testimonial", "Customer"]],
    ["Links", ["About us", "Stories", "Projects", "Blog"]],
    ["Services", services.slice(0, 4).map((s) => s.title)],
  ];
  return (
    <footer className="bg-[#E9E8D6] px-5 py-12  md:px-10">
      <div className="grid gap-10 lg:grid-cols-2 w-full">
        <div>
          <div className="flex items-center  gap-4">
            {/* <span className="border-r border-forest pr-4 text-3xl">
              leaflife
            </span> */}
            <Link href="/" aria-label="GuerreroGardeningCo. home">
              <Logo />
            </Link>
          </div>
          <p className="text-sm my-3 text-black/45">
            Stay up to date with our latest project and gardening tips.
          </p>
          <form
            className="mt-8 flex rounded-xl lg:w-[40vw] shadow bg-mist p-1"
            action="#">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email address"
              className="w-full bg-transparent px-4 py-4 text-sm outline-none"
            />
            <button
              className="m-2 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white"
              aria-label="Subscribe">
              ↗
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-sm uppercase">
          {cols.map(([h, items]) => (
            <div key={h}>
              <p className="mb-4 font-medium">{h}</p>
              <ul className="space-y-3 text-black/55">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col  justify-between gap-2 border-t border-forest pt-6 text-xs uppercase text-black/55 md:flex-row">
        <span>© 2026 Guerrero Gardening Co. All rights reserved.</span>
        <span>Privacy policy | Terms and conditions</span>
      </div>
    </footer>
  );
}
