import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import JobPosition from "./JobPosition";

const Experience = ({ fonts }) => {

    const [isVisible, setIsVisible] = useState(false);
    const orbitron = fonts[0];

    useEffect(() => {
        const handleScroll = () => {
            const triggerHeight = window.innerHeight - (window.innerHeight / 10);
            const element = document.querySelector(".experience");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < triggerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div className="experienceContainer" id="experience" initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}>
                <h3 className={`experienceTitle ${orbitron.className}`}>
                    What have I worked on? 
                </h3>
                <div className="experienceJobPositions">
              
                   <JobPosition key = {1} fonts ={[orbitron]} positionName={"Customer Service Representative"} duration={"January 2023 - September 2023"} responsibilities={"As a customer service representative, my role was to help the members get their shit right"} description={"My job was pretty bring and its only saving grace was the fact that I earned good money and barely even had calls, which was practically an infinite money glitch."}/>
                   <JobPosition key = {2} fonts ={[orbitron]} positionName={"Customer Service Representative"} duration={"January 2023 - September 2023"} responsibilities={"As a customer service representative, my role was to help the members get their shit right"} description={"My job was pretty bring and its only saving grace was the fact that I earned good money and barely even had calls, which was practically an infinite money glitch."}/>
                   <JobPosition key = {3} fonts ={[orbitron]} positionName={"Customer Service Representative"} duration={"January 2023 - September 2023"} responsibilities={"As a customer service representative, my role was to help the members get their shit right"} description={"My job was pretty bring and its only saving grace was the fact that I earned good money and barely even had calls, which was practically an infinite money glitch."}/>
                </div>
                <div className="experienceVolunteering"></div>
        </motion.div>
    );
}

export default Experience;