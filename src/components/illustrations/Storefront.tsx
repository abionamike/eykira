import { IconStorefront } from "@/components/icons";

const tiles = [
  { gradient: "linear-gradient(135deg, #cfc9f2, #a79ee6)", price: "$24" },
  { gradient: "linear-gradient(135deg, #f6c9b4, #eba283)", price: "$12" },
  { gradient: "linear-gradient(135deg, #d9d5ef, #b9b2e3)", price: "$39" },
  { gradient: "linear-gradient(135deg, #f3e2c9, #e7c393)", price: "$18" },
  { gradient: "linear-gradient(135deg, #c9e2e8, #96c4d1)", price: "$29" },
  { gradient: "linear-gradient(135deg, #efd5e4, #ddabc9)", price: "$45" },
];

export default function Storefront() {
  return (
    <div className="relative w-72 rounded-3xl border border-brand-border bg-white p-4 shadow-2xl shadow-brand-orange/15 sm:w-80">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange text-white">
          <IconStorefront className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-brand-ink">Maple & Co. Goods</p>
          <p className="text-[10px] text-brand-muted">★ 4.9 · Local seller · 1.2k sales</p>
        </div>
        <span className="ml-auto rounded-full bg-brand-orange-light px-2 py-0.5 text-[10px] font-bold text-brand-orange-dark">
          Open
        </span>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2">
        {tiles.map((tile) => (
          <div
            key={tile.price}
            className="relative h-16 rounded-xl"
            style={{ background: tile.gradient }}
          >
            <span className="absolute bottom-1 left-1 rounded-md bg-white/95 px-1.5 py-0.5 text-[9px] font-bold text-brand-ink">
              {tile.price}
            </span>
          </div>
        ))}
      </div>

      <span
        className="toast-in absolute -right-3 top-16 flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-ink shadow-md"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="text-green-600">✓</span> Order shipped
      </span>
      <span
        className="toast-in absolute -left-3 bottom-10 rounded-full bg-brand-indigo px-3 py-1.5 text-[11px] font-semibold text-white shadow-md"
        style={{ animationDelay: "2s" }}
      >
        Secure checkout
      </span>
    </div>
  );
}
