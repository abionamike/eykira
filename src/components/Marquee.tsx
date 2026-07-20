export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max gap-3">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-brand-border bg-white px-4 py-2 text-sm text-brand-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
