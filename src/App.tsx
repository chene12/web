/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackgroundEffects } from "./components/BackgroundEffects";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pt-32 pb-12 font-sans md:px-12 md:py-40 lg:px-0">
        <main id="content" className="space-y-24 lg:space-y-32">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Resume />
          
          <footer className="pb-16 text-sm text-zinc-500 sm:pb-0 text-center">
            <p>
              Designed with <span className="text-zinc-900">Figma</span> and coded in <span className="text-zinc-900">Visual Studio Code</span>. Built with <span className="text-zinc-900">React</span> and <span className="text-zinc-900">Tailwind CSS</span>, deployed with <span className="text-zinc-900">Vercel</span>. All text is set in the <span className="text-zinc-900">Inter</span> typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
