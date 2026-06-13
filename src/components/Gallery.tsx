import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import couple from "../assets/Couple-2.jpeg";
import bride1 from "../assets/Ramyasri.jpeg";
import groom from "../assets/Aditya.jpeg";
import ringCer from "../assets/rings.jpeg";
import couple1 from "../assets/couple-3.jpeg";
import couple2 from "../assets/couple-4.jpeg";
import jewelry from "../assets/scared-rings.jpeg";
import hands from "../assets/couple-5.jpeg";
import standing from "../assets/couple-7.jpeg";
import couple8 from "../assets/Couple-8.jpeg";

const PHOTOS = [
  { src: bride1, caption: "RamyaSri — The Bride" },
  { src: groom, caption: "Aditya — The Groom" },
  { src: couple8, caption: "Bride - Groom" },
  { src: couple1, caption: "Couple at the Ceremony" },
  { src: jewelry, caption: "The Sacred Rings" },
  { src: couple2, caption: "Couple at the Ceremony" },
  { src: hands, caption: "Sacred Ceremony" },
  { src: ringCer, caption: "Ring Ceremony" },
  { src: standing, caption: "A Beautiful Moment" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-cream-soft py-16 px-4 sm:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-5 py-1.5 rounded-full mb-4">
          Moments
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl text-maroon-dark mb-2">
          Our Story in Pictures
        </h2>
        <p className="font-crimson italic text-[#7a5030] text-base">
          Glimpses of love, joy, and celebration
        </p>
      </motion.div>

      {/* Featured couple shot — full width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-4 cursor-pointer group relative overflow-hidden rounded-2xl border border-[#e8d5b0] shadow-md"
        onClick={() => setLightbox(couple)}
      >
        <img
          src={couple}
          alt="Aditya & Ramyasri — Together Forever"
          decoding="async"
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/45 transition-all duration-300 flex items-end">
          <p className="w-full text-white font-crimson italic text-sm px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-dark/80 to-transparent">
            Aditya &amp; Ramyasri — Together Forever
          </p>
        </div>
      </motion.div>

      {/* Masonry — images shown at natural size, no cropping */}
      <div className="max-w-5xl mx-auto columns-2 md:columns-3 gap-4">
        {PHOTOS.map(({ src, caption }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-2xl border border-[#e8d5b0] shadow-md"
            onClick={() => setLightbox(src)}
          >
            <img
              src={src}
              alt={caption}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption on hover */}
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/45 transition-all duration-300 flex items-end">
              <p className="w-full text-white font-crimson italic text-sm px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-dark/80 to-transparent">
                {caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt="Wedding photo"
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-gold/30"
              />
              <button
                className="absolute top-3 right-3 text-white bg-dark/70 hover:bg-dark rounded-full w-9 h-9 flex items-center justify-center text-xl leading-none"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
