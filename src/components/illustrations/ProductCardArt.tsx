const marketTiles = [
  { gradient: "linear-gradient(135deg, #cfc9f2, #a79ee6)", price: "$24" },
  { gradient: "linear-gradient(135deg, #f6c9b4, #eba283)", price: "$12" },
  { gradient: "linear-gradient(135deg, #d9d5ef, #b9b2e3)", price: "$39" },
];

export default function ProductCardArt({
  variant,
}: {
  variant: "automate" | "marketplace" | "rides";
}) {
  if (variant === "automate") {
    return (
      <div className="flex h-28 flex-col justify-center gap-1.5 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-indigo-light to-white px-4">
        <span className="ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-brand-indigo px-2.5 py-1.5 text-[10px] font-medium text-white shadow-sm">
          Can I book for Friday at 2:30?
        </span>
        <span className="max-w-[80%] rounded-xl rounded-bl-sm border border-brand-border bg-white px-2.5 py-1.5 text-[10px] text-brand-ink shadow-sm">
          Booked ✓ — reminder sent
        </span>
      </div>
    );
  }

  if (variant === "marketplace") {
    return (
      <div className="grid h-28 grid-cols-3 items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange-light to-white px-4">
        {marketTiles.map((tile) => (
          <div
            key={tile.price}
            className="relative h-16 rounded-xl shadow-sm"
            style={{ background: tile.gradient }}
          >
            <span className="absolute bottom-1 left-1 rounded-md bg-white/95 px-1.5 py-0.5 text-[9px] font-bold text-brand-ink">
              {tile.price}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-indigo-light to-white">
      <svg viewBox="0 0 220 90" className="h-full w-full">
        <path
          d="M18 72 C 60 66, 70 40, 110 34 C 150 28, 160 20, 200 16"
          fill="none"
          stroke="var(--brand-indigo)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 7"
        />
        <circle cx="18" cy="72" r="5" fill="white" stroke="var(--brand-indigo)" strokeWidth="3.5" />
        <circle cx="200" cy="16" r="6" fill="var(--brand-orange)" />
        <circle cx="200" cy="16" r="2.2" fill="white" />
      </svg>
      <span className="absolute bottom-2 right-3 rounded-full border border-brand-border bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-ink shadow-sm">
        You offer $12 →
      </span>
    </div>
  );
}
