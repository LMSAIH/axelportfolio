"use client";
import NavBar from "./components/Nav";
import {motion} from 'motion/react';
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import {Orbitron }from 'next/font/google';
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
  return (
    <div className="content">
      <NavBar />

      <main>
        <div className="left">
          <Introduction fonts={[orbitron]}/>
          <Projects fonts={[orbitron]}/>
          <Skills fonts={[orbitron]} />
          <Experience fonts={[orbitron]} />
          <motion.div className="contact" id="contact"></motion.div>
        </div>

        
      </main>
    </div>
  );
}
