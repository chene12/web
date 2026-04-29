import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import vlsiSramImage from "./images/VLSI_SRAM.png";
import vlsiSramReport from "./reports/VLSI_SRAM.pdf";
import singleScalarImage from "./images/SingleScalar.png";
import singleScalarReport from "./reports/SingleScalar.pdf";
import macImage from "./images/MAC.png";
import macReport from "./reports/MAC.pdf";
import otaImage from "./images/OTA.png";
import otaReport from "./reports/OTA.pdf";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: "Out of Order Processor SoC Tapeout TSMC 180nm",
    description: "Led physical design, floorplanning, and integration for a custom SoC.",
    image: "https://picsum.photos/seed/systolic-array/600/400",
    tags: ["Physical Design", "TSMC 180nm", "Memory Compiler"],
  },
  {
    title: "Superscalar Processor Tapein on TSMC 180nm",
    description: "Designed dual-issue, in-order superscalar processor in SystemVerilog.",
    image: "https://picsum.photos/seed/sram/600/400",
    tags: ["SystemVerilog", "RTL Design", "Design Verification", "TSMC 180nm"],
  },
  {
    title: "Two Stage Op Amp with Frequency Compensation on 45nm",
    description: "Designed 2-stage OTA with Miller compensation & common-centroid layout on 45nm",
    image: otaImage,
    tags: ["Analog Design", "Cadence Virtuoso"],
    demoUrl: otaReport,
  },
  {
    title: "6 Transistor SRAM Array",
    description:
      `Designed 45nm 32x32 SRAM: full custom, LVS/DRC clean, verified.`,
    image: vlsiSramImage,
    tags: ["Cadence Virtuoso", "Mixed-Signal Design"],
    demoUrl: vlsiSramReport,
    sourceUrl: "#",
  },
  {
    title: "Full Custom Multiply and Accumulate (MAC) Unit",
    description:
      `Designed, layout-verified, & simulated 8-bit MAC in 45nm.`,
    image: macImage,
    tags: ["Cadence Virtuoso", "Full-Custom Digital Design"],
    demoUrl: macReport,
    sourceUrl: "#",
  },
  {
    title: "4-Core Multicore RISC-V Processor",
    description:
      `Designed 4-core multicore (5-stage, 2-way cache, toroidal NoC) in SystemVerilog.`,
    image: singleScalarImage,
    tags: ["SystemVerilog", "RTL Design", "Design Verification"],
    demoUrl: singleScalarReport,
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
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <span className="absolute inset-0 z-10" />
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
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
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-emerald-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-emerald-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
