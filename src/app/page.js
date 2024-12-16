"use client";
import NavBar from "./components/Nav";

export default function Home() {
  return (
    <div className="content">
      <NavBar />

      <main>
        <div className="left">
          <div className="introduction" id = "introduction"><p>hey</p> </div>
          <div className="projects" id = "projects"><p>hey</p> </div>
          <div className="skills" id ="skills"><p>hey</p> </div>
          <div className="experience" id = "experience"><p>hey</p> </div>
          <div className="contact" id ="contact"><p>hey</p> </div>
        </div>
      </main>
    </div>
  );
}
