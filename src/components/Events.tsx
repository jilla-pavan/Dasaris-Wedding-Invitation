import { motion } from "framer-motion";
import Divider from "./Divider";

const EVENTS = [
  {
    date: "2nd July 2026",
    time: "6:30 AM",
    title: "Pelli Koduku",
    desc: "Mangala Snanam",
  },
  {
    date: "2nd July 2026",
    time: "8:30 AM",
    title: "Pelli Kooturu",
    desc: "Mangala Snanam",
  },
  {
    date: "2nd July 2026",
    time: "6:00 PM",
    title: "Haldi at Groom",
    desc: "Traditional turmeric ceremony",
  },
  {
    date: "2nd July 2026",
    time: "6:00 PM",
    title: "Haldi at Bride",
    desc: "Traditional turmeric ceremony",
  },
  {
    date: "2nd July 2026",
    time: "7:00 PM",
    title: "Mehendi at Groom",
    desc: "Henna celebration",
  },
  {
    date: "2nd July 2026",
    time: "7:00 PM",
    title: "Mehendi at Bride",
    desc: "Henna celebration",
  },
  {
    date: "3rd July 2026",
    time: "6:00 PM",
    title: "Reception",
    desc: "Welcoming family & friends",
  },
  {
    date: "3rd July 2026",
    time: "7:00 PM",
    title: "Dinner",
    desc: "Dinner service begins",
  },
  {
    date: "4th July 2026",
    time: "1:48 AM",
    title: "Muhurtam",
    desc: "Sacred wedding ceremony",
    highlight: true,
  },
  {
    date: "4th July 2026",
    time: "8:00 AM",
    title: "Satyanarayana Swami Vratam",
    desc: "Nomu Ceremony",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-dark py-20 px-5 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-gold text-maroon-dark text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-4">
          Wedding Schedule
        </span>

        <h2 className="font-playfair text-4xl text-gold mb-2">
          Celebration Timeline
        </h2>

        <p className="font-crimson italic text-gold-muted">
          Every beautiful moment leading to our forever
        </p>

        <Divider light />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />

        {EVENTS.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-1/2 px-0 md:px-8">
              <div
                className={`rounded-2xl border p-6 backdrop-blur-sm
                ${
                  event.highlight
                    ? "border-gold bg-gold/10 shadow-[0_0_30px_rgba(201,153,42,0.25)]"
                    : "border-gold/30 bg-dark-deep"
                }`}
              >
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  {event.date}
                </p>

                <p className="text-gold-light font-semibold text-sm mb-2">
                  {event.time}
                </p>

                <h3 className="font-playfair text-xl text-white mb-1">
                  {event.title}
                </h3>

                <p className="font-crimson italic text-gold-muted">
                  {event.desc}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
              <div
                className={`rounded-full border-4 border-dark
                ${
                  event.highlight ? "w-6 h-6 bg-gold" : "w-4 h-4 bg-gold-light"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Wedding Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="inline-block border border-gold/50 rounded-3xl px-10 py-8 bg-dark-deep">
          <span className="block text-gold text-xs tracking-[0.3em] uppercase mb-2">
            The Wedding
          </span>

          <p className="font-crimson italic text-gold-muted mt-2">
            Friday Night Celebrations Continue Into the Sacred Muhurtam at 1:48
            AM on Saturday
          </p>

          <div className="text-gold text-4xl mt-4">♡</div>
        </div>
      </motion.div>
    </section>
  );
}
