import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

const PHONE_DISPLAY = "+254 798 034508";
const PHONE_TEL = "+254798034508";
const WHATSAPP_NUMBER = "254798034508";

const quickLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/work", label: "See Our Work" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300 mt-20">
      <div className="max-w-6xl mx-auto px-7 py-14 grid sm:grid-cols-3 gap-10">
        {/* Company */}
        <div>
          <p className="font-serif text-xl text-stone-100">
            Juma's <span className="text-bronze">Granite & Marble</span>{" "}
            Interiors
          </p>

          <p className="text-sm mt-3 max-w-[32ch] text-stone-400">
            Granite, marble & quartz — supplied & fitted, all under one roof.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs uppercase tracking-wide text-bronze font-semibold mb-3">
            Quick links
          </p>

          <nav className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm hover:text-stone-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-wide text-bronze font-semibold mb-3">
            Get in touch
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 hover:text-stone-100 transition-colors"
            >
              <Phone size={15} />
              {PHONE_DISPLAY}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-stone-100 transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp us
            </a>

            <a
              href="mailto:hello@jumasgranite.co.ke"
              className="flex items-center gap-2 hover:text-stone-100 transition-colors"
            >
              <Mail size={15} />
              hello@jumasgranite.co.ke
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://facebook.com/jumasgranite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-bronze hover:text-charcoal transition-colors"
            >
              <Facebook size={15} />
            </a>

            <a
              href="https://instagram.com/jumasgranite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-bronze hover:text-charcoal transition-colors"
            >
              <Instagram size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-stone-500">
        © 2026 Juma's Granite & Marble Interiors, Nairobi. All rights reserved.
      </div>
    </footer>
  );
}
