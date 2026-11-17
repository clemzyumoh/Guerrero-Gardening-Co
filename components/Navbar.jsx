"use client";
import Link from "next/link";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { GiGardeningShears } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";
const links = [["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];
export default function Navbar({ dark = false }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`absolute inset-x-0 top-0 z-20 px-5 py-6 md:px-10 ${dark ? "text-forest" : "text-white"}`}>
      <div className="flex items-center justify-between">
        {/* <Link href="/" className="text-xl">
          leaflife
        </Link> */}
        <Link href="/" aria-label="Guerrero Gardening Co. home">
          <Logo  />
        </Link>
        <nav className="hidden gap-12 text-sm uppercase lg:flex">
          {links.map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          {open ? (
            <GiGardeningShears className="md:text-4xl text-3xl rotate-45" />
          ) : (
            <RiMenuUnfold4Fill className="text-3xl" />
          )}
        </button>
      </div>
      {open && (
        <nav className="mt-4 flex flex-col gap-4 bg-forest p-5 text-sm uppercase text-white lg:hidden">
          {links.map(([l, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
