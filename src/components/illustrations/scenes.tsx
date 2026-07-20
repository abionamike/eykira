import Image from "next/image";
import PhoneChat from "./PhoneChat";
import DashboardCard from "./DashboardCard";
import RideMap from "./RideMap";
import Storefront from "./Storefront";
import { IconCar } from "@/components/icons";

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
