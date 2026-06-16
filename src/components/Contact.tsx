import { motion } from "framer-motion";
import Divider from "./Divider";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-16 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          Contact
        </span>

        <h2 className="font-playfair text-3xl sm:text-4xl text-maroon-dark mb-2">
          We'd Love to Celebrate With You
        </h2>

        <p className="font-crimson italic text-[#7a5030] text-base">
          For attendance confirmation or any assistance, please feel free to
          contact us.
        </p>
      </motion.div>

      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-md mx-auto bg-white border border-[#e8d5b0] rounded-2xl p-8 shadow-[0_4px_20px_rgba(123,28,28,0.08)] text-center"
      >
        <p className="font-playfair text-maroon-dark text-2xl mb-2">
          Groom's Family
        </p>

        <div className="w-12 h-px bg-[#c9a227] mx-auto mb-4" />

        <p className="font-crimson text-[#7a5030] text-base leading-relaxed mb-5">
          Dasari Lakshmi Venkata Malleswar
          <br />
          &amp;
          <br />
          Smt.Dasari Srilakshmi
        </p>

        <a
          href="tel:+919347542642"
          className="font-playfair text-maroon text-3xl font-bold hover:text-maroon-dark transition-colors"
        >
          93475 42642
        </a>
        <br></br>
        <a
          href="tel:+919293773436"
          className="font-playfair text-maroon text-3xl font-bold hover:text-maroon-dark transition-colors"
        >
          92937 73436
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="font-crimson italic text-[#9a7040] text-sm mt-10 max-w-xl mx-auto leading-relaxed"
      >
        "Your presence and blessings will make our wedding celebration truly
        special. We look forward to sharing this joyous occasion with you."
      </motion.p>
    </section>
  );
}
