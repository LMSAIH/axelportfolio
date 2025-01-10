import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactIcon } from "hugeicons-react";
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
            <h3 className={orbitron.className}> Every good builder has its trusty toolset, here's mine!  </h3>

            <div className="skillContainer">
                <Skill number = {1} fonts = {[orbitron]} SkillIcon={ReactIcon} skillColor={"#61dbfb"} skillName={"React"} skillDescription={"React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the view in response to data changes. It's widely used for building fast, interactive web applications."} />
                <Skill  number = {2} fonts = {[orbitron]} SkillIcon={ReactIcon} skillColor={"#61dbfb"} skillName={"React"} skillDescription={"React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the view in response to data changes. It's widely used for building fast, interactive web applications."} />
                <Skill   number = {3} fonts = {[orbitron]} SkillIcon={ReactIcon} skillColor={"#61dbfb"} skillName={"React"} skillDescription={"React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the view in response to data changes. It's widely used for building fast, interactive web applications."} />
            </div>


        </motion.div>
    );
}

export default Skills;
