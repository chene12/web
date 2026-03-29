import { motion } from "motion/react";
import { 
  Cpu, 
  Code2, 
  Terminal, 
  Wrench, 
  Database, 
  Cloud, 
  Activity,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    category: "Hardware Description",
    skills: [
      { name: "Verilog", icon: <Cpu className="w-5 h-5" /> },
      { name: "SystemVerilog", icon: <Layers className="w-5 h-5" /> },
      { name: "VHDL", icon: <Code2 className="w-5 h-5" /> },
    ],
  },
  {
    category: "Software & Scripting",
    skills: [
      { name: "Python", icon: <Code2 className="w-5 h-5" /> },
      { name: "C/C++", icon: <Terminal className="w-5 h-5" /> },
      { name: "TCL/Bash", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    category: "EDA Tools",
    skills: [
      { name: "Design Compiler", icon: <Cloud className="w-5 h-5" /> },
      { name: "PrimeTime", icon: <Activity className="w-5 h-5" /> },
      { name: "ModelSim/VCS", icon: <Layers className="w-5 h-5" /> },
      { name: "HSPICE", icon: <Database className="w-5 h-5" /> },
      { name: "Innovus", icon: <Wrench className="w-5 h-5" /> },
      { name: "Mentor Calibre", icon: <Code2 className="w-5 h-5" /> },
    ],
  },
  {
    category: "Core Concepts & Coursework",
    skills: [
      { name: "Computer Architecture", icon: <Cpu className="w-5 h-5" /> },
      { name: "Digital Logic Design", icon: <Layers className="w-5 h-5" /> },
      { name: "VLSI Design", icon: <Activity className="w-5 h-5" /> },
      { name: "Operating Systems", icon: <Terminal className="w-5 h-5" /> },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Tools & Skills
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <div className="flex flex-col gap-12">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-900">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-lg bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-emerald-700 ring-1 ring-zinc-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <span className="text-zinc-400 transition-colors group-hover:text-emerald-500">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
