type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHeadset({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

export function IconWaveform({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12h2" />
      <path d="M7 8v8" />
      <path d="M11 5v14" />
      <path d="M15 8v8" />
      <path d="M19 10v4" />
      <path d="M21 12h.01" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8" />
      <path d="M8 12.5h5" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M16 13.2A4.6 4.6 0 0 1 21 17.5V19" />
    </svg>
  );
}

export function IconFlow({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="4" width="6" height="5" rx="1.3" />
      <rect x="15" y="4" width="6" height="5" rx="1.3" />
      <rect x="9" y="15" width="6" height="5" rx="1.3" />
      <path d="M6 9v2a2 2 0 0 0 2 2h1" />
      <path d="M18 9v2a2 2 0 0 1-2 2h-1" />
      <path d="M12 13v2" />
    </svg>
  );
}

export function IconCalendarCheck({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M8.5 14l2 2 4-4" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l2 5" />
      <path d="M6 10 17 5v14L6 14" />
      <path d="M17 8.5a4 4 0 0 1 0 7" />
    </svg>
  );
}

export function IconTrendingUp({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

export function IconCoin({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9" />
      <path d="M9.7 9.6c0-1.1 1-2 2.3-2s2.3.7 2.3 1.7c0 2.3-4.6 1.3-4.6 3.6 0 1 1 1.8 2.3 1.8s2.3-.8 2.3-1.8" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 20s-7.5-4.7-9.5-9.2C1.2 7.4 3 4.5 6.2 4.2c2-.2 3.6.9 5.8 3 2.2-2.1 3.8-3.2 5.8-3 3.2.3 5 3.2 3.7 6.6C19.5 15.3 12 20 12 20Z" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12.5 3 5 13.5h5.5L11 21l7.5-10.5H13L12.5 3Z" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

export function IconBot({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="4" y="8.5" width="16" height="11" rx="3" />
      <path d="M12 8.5V5" />
      <circle cx="12" cy="3.5" r="1.3" />
      <path d="M8.5 14v1.2" />
      <path d="M15.5 14v1.2" />
      <path d="M2 12.5v3" />
      <path d="M22 12.5v3" />
    </svg>
  );
}

export function IconStorefront({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 4h16l1.5 5a2.3 2.3 0 0 1-4.4 1v.1a2.3 2.3 0 0 1-4.4 0 2.3 2.3 0 0 1-4.4 0v-.1a2.3 2.3 0 0 1-4.4-1L4 4Z" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M9.5 20v-5a2.5 2.5 0 0 1 5 0v5" />
    </svg>
  );
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M5.5 8v3a3 3 0 0 0 3 3h7a3 3 0 0 1 3 3v1" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3.5 11.5V5a1.5 1.5 0 0 1 1.5-1.5h6.5L21 12l-8.5 8.5-9-9Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

export function IconCar({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 16v-3.5L6 8h12l2 4.5V16" />
      <path d="M4 16h16" />
      <path d="M4 16v2.5" />
      <path d="M20 16v2.5" />
      <circle cx="7.5" cy="16" r="1.6" />
      <circle cx="16.5" cy="16" r="1.6" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.2-7 8.5-4-1.3-7-4-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="2.5" y="7" width="11" height="9" rx="1.2" />
      <path d="M13.5 10h4l3 3v3h-7" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

export function IconDashboard({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="3.5" width="8" height="6" rx="1.2" />
      <rect x="13" y="3.5" width="8" height="10" rx="1.2" />
      <rect x="3" y="12" width="8" height="8.5" rx="1.2" />
      <rect x="13" y="16" width="8" height="4.5" rx="1.2" />
    </svg>
  );
}

export function IconCreditCard({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 9.5h19" />
      <path d="M6 15h4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 4h3.2l1.3 4-2 1.5a11.5 11.5 0 0 0 5 5l1.5-2 4 1.3V17a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function IconSend({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M21.5 2.5 11 13" />
      <path d="M21.5 2.5 14.5 21.5 11 13 2.5 9.5 21.5 2.5Z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12h16" />
      <path d="M13 6l7 6-7 6" />
    </svg>
  );
}
