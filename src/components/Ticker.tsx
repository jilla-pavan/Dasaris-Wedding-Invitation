const TEXT =
  "✦   Dasari's Family Warmly Welcomes You   ✦   Sumuhurtham on Friday 3rd July 2026 at Night 1:48 AM (Early Hours Of Saturday)   ✦   Dhanishta Nakshatrayuktha – Mesha Lagnam   ✦   Maarisetti Palace Function Hall, Kadakatla, Tadepalligudem   ✦   Aditya weds Ramyasri   ✦   Avighnunamashu   ✦   Shubhamastu   ✦   Ph: 9247542641, 9293773436  ✦";

const Segment = () => (
  <span className="font-crimson text-gold-light text-sm tracking-[0.15em] px-12 whitespace-nowrap inline-block">
    {TEXT}
  </span>
);

export default function Ticker() {
  return (
    <div className="bg-maroon border-y border-gold/60 py-2.5 overflow-hidden">
      {/* Duplicate segment so the loop is seamless: animate 0 → -50% */}
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 16s linear infinite" }}
      >
        <Segment />
        <Segment />
      </div>
    </div>
  );
}
