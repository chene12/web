import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            About
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600 leading-relaxed">
          <p>
            I am currently a masters of engineering candidate graduating December 2026 studying Electrical and Computer 
            Engineering at Cornell University. I have a background ASIC and VLSI Design, Computer and Memory Architecture, 
            and analog IC design.
          </p>
          <p>
            On campus, I part of Cornell Custom Silicon Systems leading physical design efforts for digital design 
            tapeouts on TSMC 180nm technology node. This year, we am working on a complete SOC tapeout with a superscalar 
            out of order processor and a systolic array accelerator with on-chip SRAM macro.
          </p>
          <p>
            
            For academic projects, I have implemented a multicore system entirely in RTL, as well designed an entire SRAM 
            array in schematic, layout, and extraction. I have also worked on a mixed signal project, which is 
            addressable imaging array. I am looking for a team where I can leverage my experience in physical and RTL 
            design to grow my knowledge and skill set and to learn from people who are experts in this field.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
