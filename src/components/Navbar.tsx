import { useEffect, useState } from "react";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "EDUCATION", href: "#education" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 md:px-12 bg-zinc-50/90 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-zinc-900">
        <span className="text-lg">✱</span>
        <span>JOHN DOE</span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <ul className="flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`transition-colors tracking-wide ${
                  activeSection === item.href.substring(1)
                    ? "text-zinc-900 font-bold"
                    : "text-zinc-500 font-medium hover:text-zinc-900"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center w-24">
        {/* Empty div to balance the flex-between layout since center is absolute, 
            but keeping a placeholder just in case we add something later */}
      </div>
    </nav>
  );
}
