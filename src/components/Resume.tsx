import { motion } from "motion/react";
import { FileText, ArrowRight } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:gap-4"
        >
          <FileText className="w-4 h-4" />
          <span>View Full Resume</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
