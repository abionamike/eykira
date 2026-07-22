import Image from "next/image";
import PhoneChat from "./PhoneChat";
import DashboardCard from "./DashboardCard";
import RideMap from "./RideMap";
import Storefront from "./Storefront";
import { site } from "@/lib/site";
import {
  IconBot,
  IconCar,
  IconMapPin,
  IconPhone,
  IconSend,
  IconStorefront,
} from "@/components/icons";

function Blobs({ flip = false }: { flip?: boolean }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute h-64 w-64 rounded-full blur-3xl animate-float-a ${
          flip ? "bg-brand-orange/15 -right-10 top-0" : "bg-brand-indigo/15 -left-10 top-4"
        }`}
      />
      <div
        className={`pointer-events-none absolute h-52 w-52 rounded-full blur-3xl animate-float-b ${
          flip ? "bg-brand-indigo/15 -left-6 bottom-0" : "bg-brand-orange/15 -right-6 bottom-4"
        }`}
      />
    </>
  );
}

function Glyph() {
  return (
    <Image
      src="/glyph.png"
      alt=""
      width={642}
      height={642}
      aria-hidden
      className="pointer-events-none absolute h-72 w-72 opacity-[0.07] animate-drift-rotate"
    />
  );
}

/** Landing hero: AI chat phone with floating product moments around it. */
export function HeroShowcase() {
  return (
    <div className="relative mx-auto flex h-[440px] w-full max-w-md items-center justify-center lg:h-[500px]">
      <Blobs />
      <Glyph />
      <div className="relative z-10 -translate-x-4 sm:translate-x-0">
        <PhoneChat />
      </div>
      <div className="absolute -top-3 -right-1 z-20 origin-top-right scale-[0.8] animate-float-a sm:top-2 sm:right-0 sm:scale-100">
        <DashboardCard />
      </div>
      <span className="absolute bottom-8 left-0 z-20 flex items-center gap-2 rounded-full border border-brand-border bg-white px-3.5 py-2 text-xs font-semibold text-brand-ink shadow-lg animate-float-b sm:-left-4">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-indigo text-white">
          <IconCar className="h-3.5 w-3.5" />
        </span>
        Ride accepted · $12
      </span>
      <span className="absolute left-2 top-8 z-0 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-ink shadow-md animate-bob sm:-left-2">
        <span className="text-green-600">✓</span> Order shipped
      </span>
    </div>
  );
}

/** Automate hero: phone chat + live bookings dashboard. */
export function AutomateScene() {
  return (
    <div className="relative mx-auto flex h-[440px] w-full max-w-md items-center justify-center lg:h-[500px]">
      <Blobs />
      <Glyph />
      <div className="relative z-10 -translate-x-4 sm:translate-x-0">
        <PhoneChat />
      </div>
      <div className="absolute -right-1 bottom-6 z-20 origin-bottom-right scale-[0.85] animate-float-b sm:right-0 sm:bottom-10 sm:scale-100">
        <DashboardCard />
      </div>
      <span className="absolute left-0 top-10 z-20 rounded-full bg-brand-indigo px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg animate-float-a sm:-left-4">
        Missed call → texted back ✓
      </span>
    </div>
  );
}

/** Marketplace hero: storefront with trust signals. */
export function MarketScene() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center lg:h-[460px]">
      <Blobs flip />
      <Glyph />
      <div className="relative z-10 animate-bob">
        <Storefront />
      </div>
    </div>
  );
}

/** Rides hero: animated map with fare negotiation. */
export function RideScene() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center lg:h-[460px]">
      <Blobs />
      <Glyph />
      <div className="relative z-10 animate-bob">
        <RideMap />
      </div>
    </div>
  );
}

const orbitNodes = [
  {
    label: "Automate",
    icon: IconBot,
    color: "bg-brand-indigo",
    position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
    delay: "0s",
  },
  {
    label: "Marketplace",
    icon: IconStorefront,
    color: "bg-brand-orange",
    position: "left-[7%] top-3/4 -translate-x-1/2 -translate-y-1/2",
    delay: "0.8s",
  },
  {
    label: "Rides",
    icon: IconMapPin,
    color: "bg-brand-indigo",
    position: "right-[7%] top-3/4 translate-x-1/2 -translate-y-1/2",
    delay: "1.6s",
  },
];

/** About hero: the three products orbiting one company core. */
export function AboutScene() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center lg:h-[440px]">
      <Blobs />
      <div className="relative h-[300px] w-[300px] sm:h-[340px] sm:w-[340px]">
        <svg viewBox="0 0 340 340" className="animate-spin-slow absolute inset-0 h-full w-full">
          <circle
            cx="170"
            cy="170"
            r="168"
            fill="none"
            stroke="var(--brand-indigo)"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeDasharray="4 10"
          />
          <circle cx="170" cy="2" r="5" fill="var(--brand-orange)" />
          <circle cx="170" cy="338" r="3.5" fill="var(--brand-indigo)" />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-border bg-white px-6 py-4 text-center shadow-xl shadow-brand-indigo/10">
          <p className="text-lg font-bold tracking-tight text-brand-ink">Eykira</p>
          <p className="mt-0.5 whitespace-nowrap text-[10px] font-medium text-brand-muted">
            One ecosystem · Ontario, Canada
          </p>
        </div>

        {orbitNodes.map((node) => (
          <div
            key={node.label}
            className={`absolute ${node.position} animate-bob flex flex-col items-center gap-1.5`}
            style={{ animationDelay: node.delay }}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${node.color}`}
            >
              <node.icon className="h-6 w-6" />
            </span>
            <span className="rounded-full border border-brand-border bg-white px-2.5 py-0.5 text-[10px] font-semibold text-brand-ink shadow-sm">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Contact hero: an email being composed to the team. */
export function ContactScene() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center lg:h-[440px]">
      <Blobs flip />
      <div className="relative z-10 w-80 rounded-3xl border border-brand-border bg-white shadow-2xl shadow-brand-indigo/15 sm:w-[22rem]">
        <div className="flex items-center gap-1.5 border-b border-brand-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-indigo/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-border" />
          <p className="ml-2 text-xs font-semibold text-brand-muted">New message</p>
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-12 shrink-0 text-brand-muted">To</span>
            <span className="rounded-full bg-brand-indigo-light px-2.5 py-1 font-semibold text-brand-indigo-dark">
              {site.email}
            </span>
          </div>
          <div className="flex items-center gap-2 border-t border-brand-border pt-3 text-xs">
            <span className="w-12 shrink-0 text-brand-muted">Subject</span>
            <span className="font-semibold text-brand-ink">Free automation consultation</span>
          </div>
          <div className="space-y-2 border-t border-brand-border pt-4">
            <div className="h-2 w-full rounded-full bg-brand-surface" />
            <div className="h-2 w-5/6 rounded-full bg-brand-surface" />
            <div className="h-2 w-2/3 rounded-full bg-brand-surface" />
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="flex items-center gap-2 rounded-full bg-brand-indigo px-4 py-2 text-xs font-semibold text-white shadow-md shadow-brand-indigo/20">
              Send
              <IconSend className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] text-brand-muted">Attach · Aa · 🙂</span>
          </div>
        </div>
      </div>

      <span
        className="toast-in absolute right-0 top-14 z-20 flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-ink shadow-md sm:-right-2"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="text-green-600">✓</span> Replies within 1 business day
      </span>
      <span
        className="toast-in absolute bottom-14 left-0 z-20 flex items-center gap-2 rounded-full bg-brand-indigo px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg sm:-left-2"
        style={{ animationDelay: "1.7s" }}
      >
        <IconPhone className="h-3.5 w-3.5" />
        {site.phone}
      </span>
    </div>
  );
}
