const bars = [38, 52, 44, 66, 58, 82, 96];

export default function DashboardCard() {
  return (
    <div className="w-44 rounded-2xl border border-brand-border bg-white p-4 shadow-xl shadow-brand-indigo/10">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
          Bookings this week
        </p>
        <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700">
          +38%
        </span>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5">
        {bars.map((height, i) => (
          <span
            key={i}
            className={`bar-grow flex-1 rounded-t-md ${
              i === bars.length - 1 ? "bg-brand-orange" : "bg-brand-indigo/25"
            }`}
            style={{ height: `${height}%`, animationDelay: `${0.5 + i * 0.1}s` }}
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] text-brand-muted">Handled by AI · 24/7</p>
    </div>
  );
}
