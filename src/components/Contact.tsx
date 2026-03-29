import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Contact</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <p className="text-zinc-600 leading-relaxed max-w-2xl">
          I'm always open to discussing new opportunities, interesting projects, or just chatting about computer 
          architecture and ASIC design. Feel free to reach out!
        </p>
        <div className="flex items-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/edwin-chen-85aa03210/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors font-medium">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/chene12" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors font-medium">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="mailto:ec769@cornell.edu" className="flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors font-medium">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
