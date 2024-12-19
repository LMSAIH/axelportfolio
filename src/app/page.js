"use client";
import NavBar from "./components/Nav";
import {motion} from 'motion/react';
import Introduction from "./components/Introduction";


export default function Home() {
  return (
    <div className="content">
      <NavBar />

      <main>
        <div className="left">
          <Introduction />
          <motion.div className="projects" id="projects"></motion.div>
          <motion.div className="skills" id="skills"></motion.div>
          <motion.div className="experience" id="experience"></motion.div>
          <motion.div className="contact" id="contact"></motion.div>
        </div>
      </main>
    </div>
  );
}
