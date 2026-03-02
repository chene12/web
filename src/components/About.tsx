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
            I'm a passionate ASIC Design Engineer with over 5 years of experience in developing complex digital systems. My journey started with a deep fascination for how hardware and software interact at the lowest levels. Today, I specialize in creating scalable architectures and optimizing workflows for next-generation chip designs.
          </p>
          <p>
            My expertise spans across the entire ASIC design flow, from RTL coding and verification to synthesis and physical design. I thrive in environments where I can tackle challenging problems, whether it's optimizing power consumption, improving timing closure, or developing custom tools to streamline the design process.
          </p>
          <p>
            When I'm not writing Verilog or running simulations, you can find me exploring the latest advancements in semiconductor technology, contributing to open-source hardware projects, or enjoying a good cup of coffee while reading about computer architecture.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
