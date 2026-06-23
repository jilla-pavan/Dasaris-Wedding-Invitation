import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark-footer border-t border-gold/30 py-12 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Couple Names */}
        <p className="font-dancing text-gold text-4xl md:text-5xl mb-3">
          Aditya Dasari ♡ Ramyasri
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px flex-1 max-w-[100px] bg-gold/30" />
          <span className="text-gold text-xl">✦ ❦ ✦</span>
          <div className="h-px flex-1 max-w-[100px] bg-gold/30" />
        </div>

        {/* Blessing Message */}
        <p className="font-crimson italic text-gold-muted text-sm max-w-xl mx-auto leading-relaxed">
          With the blessings of
          <br />
          <span className="text-gold-light">
            Sri Dasari Adinarayana Rao &amp; Smt. Sarada Devi
          </span>
        </p>

        {/* Wedding Quote */}
        <p className="font-crimson italic text-gold-muted/80 text-sm mt-6 max-w-lg mx-auto">
          "Two hearts, one journey, and a lifetime of togetherness."
        </p>

        {/* Copyright */}
        <p className="font-crimson text-gold-muted/50 text-xs mt-8 tracking-wide">
          © 2026 Aditya &amp; Ramyasri Wedding
        </p>

        <p className="mt-3 text-xs text-gold-muted/70">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/jilla-pavan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
          >
            Pavan Jilla
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
