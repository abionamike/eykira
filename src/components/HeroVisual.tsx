import Image from "next/image";

const positions = [
  "top-2 left-0 sm:left-4",
  "top-1/2 -right-2 -translate-y-1/2 sm:right-2",
  "bottom-2 left-10 sm:left-16",
];

const anims = ["animate-float-a", "animate-bob", "animate-float-b"];

export default function HeroVisual({ chips }: { chips: string[] }) {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-sm items-center justify-center sm:h-[400px]">
      <div className="absolute h-56 w-56 rounded-full bg-brand-indigo/15 blur-3xl animate-float-a" />
      <div className="absolute right-4 top-4 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl animate-float-b" />
      <Image
        src="/glyph.png"
        alt=""
        width={642}
        height={642}
        aria-hidden
        className="relative h-44 w-44 opacity-90 animate-drift-rotate sm:h-56 sm:w-56"
      />
      {chips.slice(0, 3).map((chip, i) => (
        <span
          key={chip}
          className={`absolute ${positions[i]} ${anims[i]} rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-semibold text-brand-ink shadow-md shadow-brand-indigo/5`}
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
