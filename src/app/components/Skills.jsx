import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactIcon } from "hugeicons-react";
import { JavaScriptIcon } from "hugeicons-react";
import { CIcon } from "hugeicons-react";
import { JavaIcon } from "hugeicons-react";
import { NpmIcon } from "hugeicons-react";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { ToolsIcon } from "hugeicons-react";
import { SiAmazonwebservices, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import Skill from "./Skill";
const Skills = ({ fonts }) => {

    const orbitron = fonts[0];
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const triggerHeight = window.innerHeight - (window.innerHeight / 10);
            const element = document.querySelector(".skills");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < triggerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    element.style.transform = "translateY(10)";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <motion.div className="skills" id="skills" initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: -10 }}
            transition={{ duration: 0.3 }}>
            <div className="skillsTopLeft">
                <ToolsIcon />
            </div>
            <h3 className={orbitron.className}> Every good builder has its trusty toolset, here's mine!  </h3>

            <div className="skillContainer">
                <Skill number={1} fonts={[orbitron]} SkillIcon={ReactIcon} skillColor={"#61dbfb"} skillName={"React"} skillDescription={"React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the view in response to data changes. It's widely used for building fast, interactive web applications."} />
                <Skill number={2} fonts={[orbitron]} SkillIcon={SiTailwindcss} skillColor={"#a5f3fc"} skillName={"Tailwind CSS"} skillDescription={"Tailwind CSS is a utility-first CSS framework that provides pre-built classes to style elements directly in your HTML. It simplifies responsive design, speeds up development, and ensures design consistency, all while being fully customizable."} />
                <Skill number={3} fonts={[orbitron]} SkillIcon={SiNextdotjs} skillColor={"black"} skillName={"NextJS"} skillDescription={"Next.js is a React-based framework for building fast and scalable web applications. It offers features like server-side rendering (SSR), static site generation (SSG), API routes, and optimized performance out of the box."} />
                <Skill
                    number={4}
                    fonts={[orbitron]}
                    SkillIcon={JavaScriptIcon}
                    skillColor={"#F7DF1E"}
                    skillName={"JavaScript"}
                    skillDescription={"JavaScript is a versatile programming language used for web development to add interactivity, manipulate the DOM, and handle server-side logic with frameworks like Node.js."}
                />
                <Skill
                    number={5}
                    fonts={[orbitron]}
                    SkillIcon={CIcon}
                    skillColor={"#00599C"}
                    skillName={"C++"}
                    skillDescription={"C++ is a powerful programming language used for system software, game development, and applications requiring fine control over hardware and memory."}
                />

                <Skill
                    number={6}
                    fonts={[orbitron]}
                    SkillIcon={JavaIcon}
                    skillColor={"#007396"}
                    skillName={"Java"}
                    skillDescription={"Java is an object-oriented programming language used for building scalable web, mobile, and enterprise applications, known for its reliability and cross-platform support."}
                />

                <Skill
                    number={7}
                    fonts={[orbitron]}
                    SkillIcon={NpmIcon}
                    skillColor={"#CB3837"}
                    skillName={"npm"}
                    skillDescription={"npm (Node Package Manager) is a tool for managing, sharing, and installing JavaScript dependencies, simplifying development workflows. It comes bundled with Node.js."}
                />
                <Skill
                    number={8}
                    fonts={[orbitron]}
                    SkillIcon={SiAmazonwebservices}
                    skillColor={"#FF9900"}
                    skillName={"AWS"}
                    skillDescription={"AWS (Amazon Web Services) is a comprehensive cloud platform offering a wide range of services like computing, storage, and databases, enabling scalable and secure application development."}
                />
                <Skill
                    number={9}
                    fonts={[orbitron]}
                    SkillIcon={SiMongodb}
                    skillColor={"#47A248"}
                    skillName={"MongoDB"}
                    skillDescription={"MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It's highly scalable, making it ideal for modern applications requiring real-time and unstructured data storage."}
                />
                <Skill
                    number={10}
                    fonts={[orbitron]}
                    SkillIcon={SiExpress}
                    skillColor={"#000000"}
                    skillName={"Express"}
                    skillDescription={"Express is a lightweight and flexible Node.js web application framework for building APIs and web applications, known for its simplicity and robust middleware system."}
                />
                <Skill
                    number={11}
                    fonts={[orbitron]}
                    SkillIcon={SiNodedotjs}
                    skillColor={"#339933"}
                    skillName={"Node.js"}
                    skillDescription={"Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development for building scalable, high-performance applications and APIs."}
                />

            </div>


        </motion.div>
    );
}

export default Skills;
