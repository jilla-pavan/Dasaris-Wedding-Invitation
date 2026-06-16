import { motion } from "framer-motion";
import Divider from "./Divider";
import bridePortrait from "../assets/Ramyasri.jpeg";
import groomPortrait from "../assets/Aditya.jpeg";
import coupleTogether from "../assets/Couple.jpeg";

export default function Couple() {
  return (
    <section id="couple" className="bg-dark py-16 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-gold text-maroon-dark text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          The Couple
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl text-gold mb-2">
          Aditya &amp; Ramyasri
        </h2>
        <p className="font-crimson italic text-gold-muted text-base">
          United in the sacred bond of Mesha Lagnam
        </p>
      </motion.div>

      <Divider light />

      {/* Portraits */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 mt-6">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 mx-auto">
            <div className="absolute inset-0 rounded-[50%_50%_44%_44%] shadow-[0_0_40px_rgba(201,153,42,0.35)]" />
            <div className="w-full h-full rounded-[50%_50%_44%_44%] overflow-hidden border-[3px] border-gold">
              <img
                src={groomPortrait}
                alt="Aditya — The Groom"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <p className="font-dancing text-gold text-2xl mt-4">Aditya</p>
          <p className="font-crimson italic text-gold-muted text-sm mt-0.5">
            The Groom
          </p>
          <p className="font-crimson italic text-gold-muted text-sm">
            S/o Dasari Lakshmi Venkata Malleswar & Smt. Dasari Srilakshmi
          </p>
        </motion.div>{" "}
        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="font-dancing text-gold text-6xl hidden sm:block"
        >
          ♡
        </motion.div>
        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 mx-auto">
            {/* Gold glow ring */}
            <div className="absolute inset-0 rounded-[50%_50%_44%_44%] shadow-[0_0_40px_rgba(201,153,42,0.35)]" />
            <div className="w-full h-full rounded-[50%_50%_44%_44%] overflow-hidden border-[3px] border-gold">
              <img
                src={bridePortrait}
                alt="Ramyasri — The Bride"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <p className="font-dancing text-gold text-2xl mt-4">Ramyasri</p>
          <p className="font-crimson italic text-gold-muted text-sm mt-0.5">
            The Bride
          </p>
          <p className="font-crimson italic text-gold-muted text-sm">
            D/o Sri Chittala Srinivasa Rao & Smt. Padmavathi
          </p>
        </motion.div>
      </div>

      {/* Mobile heart */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="font-dancing text-gold text-5xl sm:hidden mt-2"
      >
        ♡
      </motion.div>

      {/* Couple together featured photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl mx-auto mt-10"
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-gold/60 shadow-[0_0_50px_rgba(201,153,42,0.2)]">
          <img
            src={coupleTogether}
            alt="Aditya and Ramyasri together"
            loading="lazy"
            decoding="async"
            className="w-full h-80 sm:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
            <p className="font-dancing text-gold text-3xl drop-shadow-lg">
              Together Forever
            </p>
            <p className="font-crimson italic text-gold-muted text-sm mt-1">
              3rd July 2026 · Mesha Lagnam
            </p>
          </div>
        </div>
      </motion.div>

      {/* Family box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto mt-8 bg-dark-deep border border-gold/50 rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {/* Groom */}
          <div className="p-8 text-center">
            <p className="font-playfair text-gold-light text-lg mb-3 tracking-wide">
              Groom
            </p>

            <h3 className="font-playfair text-3xl text-white font-bold leading-tight">
              Naga Venkata
              <br />
              Krishna Sai Aditya
            </h3>

            <div className="w-16 h-px bg-gold mx-auto my-5" />

            <p className="font-crimson text-gold-light text-sm uppercase tracking-widest mb-2">
              Beloved Son of
            </p>

            <div className="font-crimson text-gold-muted text-base leading-relaxed">
              <p>Dasari Lakshmi Venkata Malleswar</p>
              <p>&</p>
              <p>Smt. Dasari Srilakshmi</p>
            </div>
          </div>

          {/* Bride */}
          <div className="p-8 text-center">
            <p className="font-playfair text-gold-light text-lg mb-3 tracking-wide">
              Bride
            </p>

            <h3 className="font-playfair text-3xl text-white font-bold leading-tight">
              Ramyasri
            </h3>

            <div className="w-16 h-px bg-gold mx-auto my-5" />

            <p className="font-crimson text-gold-light text-sm uppercase tracking-widest mb-2">
              Beloved Daughter of
            </p>

            <div className="font-crimson text-gold-muted text-base leading-relaxed">
              <p>Sri Chittala Srinivasa Rao</p>
              <p>&</p>
              <p>Smt. Padmavathi</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
