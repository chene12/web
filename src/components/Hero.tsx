import { motion } from "motion/react";
import { Asterisk } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="mb-24 pt-12 md:pt-24 lg:pt-0 flex flex-col justify-center min-h-[70vh] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1A1A1A]">
          A Problem Solver<span className="font-sans font-light text-zinc-400">|</span><br />
          Specializing in Complex Workflow<br />
          & Scalable Systems
          <Asterisk className="inline-block w-8 h-8 md:w-12 md:h-12 ml-2 text-yellow-500 -translate-y-4" />
        </h2>

        {/* Decorative SVG Elements */}
        <div className="absolute top-0 right-10 md:-right-10 opacity-60 pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="20" stroke="#A1A1AA" strokeWidth="2" />
            <circle cx="50" cy="50" r="6" fill="#FACC15" />
          </svg>
        </div>
        
        <div className="absolute -bottom-10 left-10 opacity-60 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 100 Q 50 50 100 100 T 180 100" stroke="#1A1A1A" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="mt-24 flex justify-end">
          <div className="max-w-sm text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 leading-relaxed text-right">
            <p className="mb-6">
              With 5+ years in ASIC design, I build architectures and workflows that bring structure, clarity, and scale to next-generation chips.
            </p>
            <p className="mb-6">
              Previously @TechCorp and Innovate Chips. Currently designing high-performance IP cores.
            </p>
            <p className="text-[#1A1A1A] flex items-center justify-end gap-2">
              <Asterisk className="w-3 h-3" /> Based in Silicon Valley
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
