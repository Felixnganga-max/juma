import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/work", label: "See Our Work" },
  { to: "/contact", label: "Contact" },
];

// Drop your logo file in /src/assets and update this import,
// e.g. import logo from "../assets/logo.png";
const LOGO_URL = assets.logo;

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink to={to} onClick={onClick} className="relative group">
      {({ isActive }) => (
        <span
          className={`block ${
            mobile ? "px-1 py-2.5 text-base" : "px-3.5 py-2 text-sm"
          } tracking-wide transition-colors ${
            isActive
              ? "text-stone-100"
              : "text-stone-300 group-hover:text-stone-100"
          }`}
        >
          {label}
          {!mobile && (
            <span
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-flame rounded-full transition-all duration-300 ${
                isActive ? "w-6" : "w-0 group-hover:w-6"
              }`}
            />
          )}
        </span>
      )}
    </NavLink>
  );
}

export default function Navbar({ onLoginClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const headerHeight = scrolled ? 60 : 74;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur border-b border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]"
          : "bg-charcoal/30 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {scrolled && (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-flame/70 to-transparent" />
      )}

      <div
        className="max-w-6xl mx-auto px-6 md:px-7 flex items-center justify-between relative transition-all duration-300"
        style={{ height: headerHeight }}
      >
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="Juma's Granite & Marble Interiors"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-9" : "h-11"
              }`}
            />
          ) : (
            <span className="h-9 w-9 rounded-full bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-[9px] text-stone-400 leading-tight text-center">
              LOGO
            </span>
          )}
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-base md:text-lg text-stone-100 tracking-wide">
              Juma's Granite
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-flame -mt-0.5">
              & Marble Interiors
            </span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="bg-gradient-to-r from-bronze to-flame text-charcoal font-semibold text-sm px-4.5 py-2 rounded-full shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.97] transition-all"
          >
            Login
          </button>
          <button
            className="md:hidden text-stone-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: headerHeight }}
      />

      <nav
        aria-label="Mobile"
        className="md:hidden absolute left-0 right-0 bg-charcoal border-b border-white/10 flex flex-col px-6 overflow-hidden transition-[max-height,padding] duration-300"
        style={{
          top: headerHeight,
          maxHeight: open ? 320 : 0,
          paddingBlock: open ? 16 : 0,
        }}
      >
        {links.map((l, i) => (
          <div
            key={l.to}
            className={`transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            <NavItem
              to={l.to}
              label={l.label}
              onClick={() => setOpen(false)}
              mobile
            />
          </div>
        ))}
      </nav>
    </header>
  );
}
