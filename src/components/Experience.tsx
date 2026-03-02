import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Senior ASIC Design Engineer",
    company: "TechCorp Semiconductors",
    url: "#",
    date: "2022 — PRESENT",
    description:
      "Lead the design and verification of high-performance digital IP cores for next-generation networking SoCs. Developed and optimized complex RTL architectures, achieving a 15% reduction in power consumption and a 10% improvement in timing closure. Mentored junior engineers and established best practices for code quality and verification methodologies.",
    skills: ["SystemVerilog", "UVM", "Synthesis", "Static Timing Analysis", "Python"],
  },
  {
    title: "ASIC Design Engineer",
    company: "Innovate Chips Inc.",
    url: "#",
    date: "2019 — 2022",
    description:
      "Contributed to the development of a low-power microcontroller unit (MCU) for IoT applications. Implemented key peripheral modules in Verilog and performed block-level verification using constrained random testing. Collaborated with the physical design team to resolve timing violations and ensure successful tape-out.",
    skills: ["Verilog", "C/C++", "TCL", "Design Compiler", "PrimeTime"],
  },
  {
    title: "Hardware Engineering Intern",
    company: "Global Silicon Solutions",
    url: "#",
    date: "2018 — 2019",
    description:
      "Assisted in the verification of a PCIe Gen4 controller IP. Developed testbenches and automated regression scripts using Python and Bash. Participated in code reviews and gained hands-on experience with industry-standard EDA tools.",
    skills: ["Verilog", "Python", "Bash", "ModelSim", "Git"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Experience
        </h2>
      </div>

      <div className="group/list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition-all duration-300 motion-reduce:transition-none lg:block lg:group-hover:bg-white lg:group-hover:shadow-md lg:group-hover:ring-1 lg:group-hover:ring-zinc-200"></div>
              
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                {exp.date}
              </header>
              
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-900">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-zinc-900 hover:text-emerald-600 focus-visible:text-emerald-600 group/link text-base"
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {exp.title} ·{" "}
                        <span className="inline-block">
                          {exp.company}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1" />
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-zinc-600">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-emerald-100/50 px-3 py-1 text-xs font-medium leading-5 text-emerald-700">
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
