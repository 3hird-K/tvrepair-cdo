import {
  Layers,
  Power,
  MonitorOff,
  LoaderCircle,
  Sun,
  ScanLine,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  brand: "LimFix",
  tagline: "LED & LCD TV Repair Specialists",
  phoneDisplay: "+639 56 500 7833",
  phoneRaw: "09565007833",
  phoneIntl: "+639565007833",
  hours: "Open daily · 8:00 AM – 12:00 AM",
  cities: ["Cagayan de Oro City", "Iligan City"],
} as const;

export const telLink = `tel:${SITE.phoneRaw}`;

export function smsLink(body: string) {
  return `sms:${SITE.phoneRaw}?&body=${encodeURIComponent(body)}`;
}

export type Problem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

export const PROBLEMS: Problem[] = [
  {
    icon: Layers,
    title: "Double Image",
    desc: "Ghost or shadow pictures layered over the screen, doubling everything you watch.",
    tag: "Panel / T-CON",
  },
  {
    icon: Power,
    title: "No Power",
    desc: "The TV is completely dead — no lights, no sound, no sign of life at all.",
    tag: "Power board",
  },
  {
    icon: MonitorOff,
    title: "No Display",
    desc: "Power light is on and you hear sound, but the screen stays pitch black.",
    tag: "Backlight / panel",
  },
  {
    icon: LoaderCircle,
    title: "Hang on Logo",
    desc: "Frozen on the brand logo or start-up screen and never finishes booting.",
    tag: "Main board",
  },
  {
    icon: Sun,
    title: "Backlight Problem",
    desc: "Dark screen, dim patches, or brightness that flickers and fades.",
    tag: "LED strips",
  },
  {
    icon: ScanLine,
    title: "Vertical Moving Line",
    desc: "Colored lines running up and down the display, sometimes moving.",
    tag: "Panel / COF",
  },
  {
    icon: Zap,
    title: "Standby Power",
    desc: "Stuck on the standby light and won't fully power up when you press it.",
    tag: "Power supply",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Book in 60 seconds",
    desc: "Call or fill the booking form. Tell us the symptom and your city — that's it.",
  },
  {
    step: "02",
    title: "We come to you",
    desc: "Our technician arrives at your home in Cagayan de Oro or Iligan at the agreed time.",
  },
  {
    step: "03",
    title: "Free diagnosis & quote",
    desc: "We inspect on the spot and give you a clear, honest price before any work begins.",
  },
  {
    step: "04",
    title: "Expert repair + warranty",
    desc: "We fix it fast using quality parts, then back the work with a service warranty.",
  },
];

export const BRANDS = [
  "Samsung",
  "LG",
  "Sony",
  "TCL",
  "Hisense",
  "Skyworth",
  "Devant",
  "Sharp",
  "Panasonic",
  "Xiaomi",
  "Coocaa",
  "AOC",
];

export const AREAS = {
  "Cagayan de Oro City": [
    "Carmen",
    "Bulua",
    "Kauswagan",
    "Lapasan",
    "Indahag",
    "Gusa",
    "Macasandig",
    "Nazareth",
    "Balulang",
    "Patag",
  ],
  "Iligan City": [
    "Pala-o",
    "San Miguel",
    "Tubod",
    "Barinaut",
    "Palao",
    "Suarez",
    "Villaverde",
    "Mandaluyong",
    "Upper Tominobo",
    "Abuno",
  ],
} as const;

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do you really do home service?",
    a: "Yes. We come to your home anywhere in Cagayan de Oro City and Iligan City. Most repairs are done right at your place, so you never have to unmount or carry your TV anywhere.",
  },
  {
    q: "How much does diagnosis cost?",
    a: "On-site diagnosis is free. We check your TV, find the real cause, and give you a clear price quote before any repair work starts. You decide before you pay.",
  },
  {
    q: "What TV brands do you repair?",
    a: "All major LED and LCD brands — Samsung, LG, Sony, TCL, Hisense, Skyworth, Devant, Sharp, Panasonic, Xiaomi, Coocaa, AOC and more.",
  },
  {
    q: "How long does a repair take?",
    a: "Many faults are fixed the same visit. If a specific part is needed, we source it fast and return to finish the job. We'll always tell you the timeline upfront.",
  },
  {
    q: "Is the repair guaranteed?",
    a: "Yes. Every completed repair is backed by a service warranty, so you're covered if the same issue comes back.",
  },
  {
    q: "Can I just call instead of booking online?",
    a: "Absolutely. Tap any “Call Now” button to reach us directly at 0956 500 7833 — we're open daily from 8:00 AM to 8:00 PM.",
  },
];
