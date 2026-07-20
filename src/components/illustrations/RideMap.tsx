const routePath =
  "M35 175 C 80 165, 70 110, 115 100 C 155 91, 150 60, 185 48 C 197 44, 208 40, 216 36";

export default function RideMap() {
  return (
    <div className="relative w-72 overflow-hidden rounded-3xl border border-brand-border bg-white shadow-2xl shadow-brand-indigo/15 sm:w-80">
      <svg viewBox="0 0 260 210" className="block w-full">
        <rect width="260" height="210" fill="var(--brand-surface)" />

        {/* street grid */}
        {[40, 90, 140, 190].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="260" y2={y} stroke="white" strokeWidth="7" />
        ))}
        {[55, 120, 185].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="210" stroke="white" strokeWidth="7" />
        ))}
        {/* park block */}
        <rect x="128" y="98" width="49" height="34" rx="6" fill="#e3efdd" />
        <rect x="63" y="148" width="49" height="34" rx="6" fill="#e8e6f9" />

        {/* route */}
        <path
          d={routePath}
          fill="none"
          stroke="var(--brand-indigo)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="route-path"
        />

        {/* pickup */}
        <circle cx="35" cy="175" r="6.5" fill="white" stroke="var(--brand-indigo)" strokeWidth="4" />
        {/* destination */}
        <circle cx="216" cy="36" r="8" fill="var(--brand-orange)" />
        <circle cx="216" cy="36" r="2.8" fill="white" />

        {/* car moving along the route */}
        <g className="motion-car">
          <circle r="5.5" fill="white" stroke="var(--brand-indigo)" strokeWidth="3.5" />
          <animateMotion dur="6s" repeatCount="indefinite" path={routePath} />
        </g>
      </svg>

      <span
        className="toast-in absolute left-4 bottom-14 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-ink shadow-md"
        style={{ animationDelay: "0.9s" }}
      >
        You offer: <span className="text-brand-indigo">$12</span>
      </span>
      <span
        className="toast-in absolute right-4 top-14 rounded-full bg-brand-indigo px-3 py-1.5 text-[11px] font-semibold text-white shadow-md"
        style={{ animationDelay: "1.9s" }}
      >
        Driver accepted ✓
      </span>
    </div>
  );
}
