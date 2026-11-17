import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Sections";
import { site } from "@/lib/data";
export const metadata = { title: "Contact | leaflife" };
const field = "w-full border border-forest bg-transparent px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-forest/40";
export default function Contact() {
  return (
    <>
      <div className="relative"><Navbar /><Hero title="Contact us" crumb="Contact" /></div>
      <section className="grid gap-12 px-5 py-16 md:grid-cols-[2fr_1fr] md:px-10">
        {/* Static form: replace YOUR_ID with a Formspree form id (or Netlify Forms), no backend needed. */}
        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-5">
          <input name="first_name" required placeholder="First name" aria-label="First name" className={field} />
          <input name="last_name" required placeholder="Last name" aria-label="Last name" className={field} />
          <input name="email" type="email" required placeholder="Email" aria-label="Email" className={field} />
          <textarea name="message" required rows={8} placeholder="Message" aria-label="Message" className={field} />
          <button className="btn w-full py-5">Send message</button>
        </form>
        <div className="space-y-8">
          <div><h2 className="font-semibold">Address</h2><p className="mt-2 text-black/60">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</p></div>
          <div><h2 className="font-semibold">Phone number</h2><p className="mt-2 text-black/60">{site.phone1}{site.phone2 && <span className="block">{site.phone2}</span>}</p></div>
          <div><h2 className="font-semibold">Email address</h2><p className="mt-2 text-black/60">{site.email}</p></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
