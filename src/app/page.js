"use client";
import NavBar from "./components/Nav";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import {Orbitron }from 'next/font/google';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Head from "next/head";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Home() {
  return (

    
    <div className="content">

      <Head>
              <title>Axel Velasquez Portfolio</title>
              <meta
                name="description"
                content="Welcome to Axel Velasquez's portfolio. I am a freelance web developer, and I would love to work with you!"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="Axel Velasquez" />
              <meta property="og:title" content="Axel Velasquez Portfolio" />
              <meta
                property="og:description"
                content="Explore my work and discover how I can help bring your projects to life."
              />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://axelvelasquezportfolio.vercel.app" />
            </Head>
      <NavBar />

      <main>
        <div className="left">
          <Introduction fonts={[orbitron]}/>
          <Projects fonts={[orbitron]}/>
          <Skills fonts={[orbitron]} />
          <Experience fonts={[orbitron]} />
          <Contact fonts = {[orbitron]} />
        </div>

        
      </main>
    </div>
  );
}
