import { motion } from "framer-motion";
import Divider from "./Divider";

export default function Welcome() {
  return (
    <section className="bg-cream py-16 px-5 text-center" id="family">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          Dasari's Family Welcomes You
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl text-maroon-dark mb-2">
          A Blessed Occasion
        </h2>
        <p className="font-crimson italic text-[#7a5030] text-base">
          We solicit your gracious presence with family &amp; friends
        </p>
      </motion.div>

      <Divider />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-crimson text-[#5a3a1a] text-base sm:text-lg leading-loose max-w-2xl mx-auto mb-8"
      >
        <strong className="text-maroon">
          Dasari Lakshmi Venkata Malleswar
        </strong>{" "}
        cordially invite you to witness the sacred union of their Son{" "}
        <strong className="text-maroon">
          Chi. Aditya Dasari
        </strong>{" "}
        with <strong className="text-maroon">Chi. La. Sou. Ramyasri</strong> —
        D/o Smt. &amp; Sri Chittala Srinivasa Rao - Padmavathi.
        <br />
        <br />
        Your presence will bless this auspicious occasion of{" "}
        <em>Mesha Lagnam</em> and add immense joy to our family celebrations.
      </motion.p>

      {/* Family Members Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="font-playfair text-2xl md:text-3xl text-maroon-dark text-center mb-2">
          Family Members
        </h3>

        <p className="font-crimson text-[#9a6a3a] text-center italic mb-8">
          With the blessings and love of our dear family
        </p>

        {/* Family cards — auto-scrolling marquee */}
        <div className="overflow-hidden max-w-5xl mx-auto relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-r from-cream to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" />

          <div className="family-marquee flex gap-4 w-max pb-4">
            {[
              {
                name: "Sri Dasari Lakshmi Venkata Malleswar",
                role: "With Blessings",
              },
              {
                name: "Smt. Srilakshmi",
                role: "With Blessings",
              },
              {
                name: "Sri Sodisetty Teja Naga Prasanth",
                role: "With Blessings",
              },
              {
                name: "Smt. Sri Vaishnavi Sarvani Devi",
                role: "With Blessings",
              },

              // Duplicate for seamless infinite scrolling
              {
                name: "Sri Dasari Lakshmi Venkata Malleswar",
                role: "With Blessings",
              },
              {
                name: "Smt. Srilakshmi",
                role: "With Blessings",
              },
              {
                name: "Sri Sodisetty Teja Naga Prasanth",
                role: "With Blessings",
              },
              {
                name: "Smt. Sri Vaishnavi Sarvani Devi",
                role: "With Blessings",
              },
            ].map(({ name, role }, i) => (
              <div
                key={i}
                className="min-w-[220px] bg-white border border-[#e8d5b0] rounded-xl px-5 py-6 text-center flex-shrink-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <p className="font-playfair text-maroon-dark font-bold text-base leading-snug">
                  {name}
                </p>

                <div className="w-10 h-px bg-[#d4af37] mx-auto my-3" />

                <p className="font-crimson text-[#9a6a3a] text-sm italic">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
