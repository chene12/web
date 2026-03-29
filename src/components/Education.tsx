import { motion } from "motion/react";

const educationData = [
  {
    degree: "Master of Science in Electrical and Computer Engineering",
    school: "Cornell University",
    date: "Jan 2026 — Dec 2026",
    achievements: [
      "GPA: N/A",
      "Thesis: 28nm Configurable Memory Enabling Logic in Memory",
    ],
  },
  {
    degree: "Bachelor of Science in Electrical and Computer Engineering",
    school: "Cornell University",
    date: "Aug 2022 — May 2026",
    achievements: [
      "GPA: 3.9/4.0",
      "Dean's List all semesters",
      "Cornell Custom Silicon Systems, Physical Design",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Education</h2>
      </div>
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col gap-4 sm:flex-row sm:gap-8"
          >
            <header className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:w-1/4">
              {edu.date}
            </header>
            <div className="z-10 sm:w-3/4">
              <h3 className="font-medium leading-snug text-zinc-900 text-lg">
                {edu.degree}
              </h3>
              <p className="mt-1 text-base text-zinc-600 font-medium">
                {edu.school}
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
