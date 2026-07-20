import { IconBot } from "@/components/icons";

const messages = [
  { from: "user", text: "Hi! Can I book a cleaning for Friday?", delay: 0.4 },
  {
    from: "ai",
    text: "Absolutely — we have 10:00 AM or 2:30 PM open. Which works best?",
    delay: 1.1,
  },
  { from: "user", text: "2:30 PM works 👍", delay: 1.8 },
  {
    from: "ai",
    text: "You're booked for Friday, 2:30 PM ✓ Reminder coming Thursday.",
    delay: 2.5,
  },
];

export default function PhoneChat() {
  return (
    <div className="w-64 rounded-[2.2rem] border border-brand-border bg-white p-2.5 shadow-2xl shadow-brand-indigo/20 sm:w-72">
      <div className="rounded-[1.8rem] bg-brand-surface p-3.5">
        <div className="flex items-center gap-2.5 border-b border-brand-border pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-indigo text-white">
            <IconBot className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-brand-ink">Eykira AI Receptionist</p>
            <p className="flex items-center gap-1.5 text-[10px] text-brand-muted">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-500" />
              Online · replies instantly
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          {messages.map((message) => (
            <p
              key={message.text}
              className={`chat-bubble max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-snug shadow-sm ${
                message.from === "user"
                  ? "ml-auto rounded-br-sm bg-brand-indigo text-white"
                  : "rounded-bl-sm border border-brand-border bg-white text-brand-ink"
              }`}
              style={{ animationDelay: `${message.delay}s` }}
            >
              {message.text}
            </p>
          ))}

          <span
            className="chat-bubble inline-flex items-center gap-1 rounded-2xl rounded-bl-sm border border-brand-border bg-white px-3 py-2.5 shadow-sm"
            style={{ animationDelay: "3.2s" }}
          >
            {[0, 0.15, 0.3].map((dotDelay) => (
              <span
                key={dotDelay}
                className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-muted"
                style={{ animationDelay: `${dotDelay}s` }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
