import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "6 Transistor SRAM Design",
    description:
      `Designed a full custom 6T SRAM bitcell in gpdk 45nm technology. Implemented SRAM column circuitry (write driver, 
      precharge, reset latch, sense amplifier, and output latch) with optimized drive strength. Integrated
      bitcells into a 32 by 32 complete SRAM complete with custom decoder and control logic, and achieved DRC and LVS 
      clean. Anaalyzed extracted layout to validate SRAM operation under Monte Carlo simulation.`,
    image: "https://picsum.photos/seed/riscv/600/400",
    tags: ["SystemVerilog", "RISC-V", "FPGA", "Vivado"],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Full Custom Multiply and Accumulate (MAC) Unit",
    description:
      `Designed 8-bit carry-save multiplier, 20-bit carry-select adder, and accumulator register in Cadence 
      Virtuoso (gpdk45 PDK). Completed schematic, layout, and post-layout extraction of the full MAC cell with 
      hierarchical sub-circuits. Verifying correct MAC accumulation over 10 cycles and measured delay and energy at 
      schematic and extracted levels.`,
    image: "https://picsum.photos/seed/verification/600/400",
    tags: ["Python", "UVM", "Jenkins", "Bash"],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Multicore RISC-V Processor",
    description:
      `A 5-stage full-bypass processor with two-way associative cache as a single core architecture. Integrated four cores
      with a toroidal network on chip interconnect into a multicore system. Implemented in synthesizable System Verilog.`,
    image: "https://picsum.photos/seed/memory/600/400",
    tags: ["Verilog", "AXI", "Low Power", "Design Compiler"],
    demoUrl: "#",
    sourceUrl: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-video w-full overflow-hidden bg-zinc-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0 z-10" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 z-20 relative">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-emerald-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-emerald-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
