import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { assets } from "../assets/assets";

const PHONE_DISPLAY = "+254 798 034508";
const PHONE_TEL = "+254798034508";
const WHATSAPP_NUMBER = "254798034508";
const FACEBOOK_URL = "https://facebook.com/mawestudio";
const INSTAGRAM_URL = "https://instagram.com/mawestudio";
const CABINET_IMAGE = assets.living;

const contactLinks = [
  {
    href: "tel:" + PHONE_TEL,
    icon: Phone,
    label: PHONE_DISPLAY,
    sub: "Call us",
    external: false,
  },
  {
    href: "https://wa.me/" + WHATSAPP_NUMBER,
    icon: MessageCircle,
    label: PHONE_DISPLAY,
    sub: "Message us on WhatsApp",
    external: true,
  },
  {
    href: "mailto:hello@mawestudio.co.ke",
    icon: Mail,
    label: "hello@mawestudio.co.ke",
    sub: "Email us",
    external: false,
  },
];

const socialLinks = [
  { href: FACEBOOK_URL, icon: Facebook, label: "Facebook" },
  { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
];

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-7 py-16">
      <div className="mb-10">
        <p className="text-bronze text-sm font-semibold">Get in touch</p>

        <h1 className="font-serif text-3xl mt-1 text-charcoal">
          Talk to us about your space
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-stone-600 max-w-[42ch]">
            Call, WhatsApp, or email us directly — no forms. We usually reply
            within the day.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.sub}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-charcoal hover:text-bronze transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </span>

                  <span>
                    <span className="block font-semibold">{link.label}</span>

                    <span className="block text-sm text-stone-500">
                      {link.sub}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal hover:bg-bronze hover:text-charcoal transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img
            src={CABINET_IMAGE}
            alt="Custom kitchen cabinetry"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
