import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import JobPosition from "./JobPosition";
import { WorkHistoryIcon } from "hugeicons-react";

const Experience = ({ fonts }) => {

    const [isVisible, setIsVisible] = useState(false);
    const orbitron = fonts[0];

    useEffect(() => {
        const handleScroll = () => {
            const triggerHeight = window.innerHeight - (window.innerHeight / 10);
            const element = document.querySelector("#experience");
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
            <div className="experienceTop">
                <WorkHistoryIcon />
            </div>
            <div className="experienceJobPositions">

                <JobPosition key={1} fonts={[orbitron]} company={"ResultsCX"} positionName={"Call Center Associate"} duration={"June 2023 - December 2023"}
                    responsibilities={"Provided exceptional customer support to Medicare Part D beneficiaries by addressing inquiries regarding plan benefits, claims, coverage, billing, and enrollment processes. Educated beneficiaries on prescription drug coverage options, including tier levels, formularies, and out-of-pocket costs, ensuring compliance with CMS (Centers for Medicare & Medicaid Services) guidelines. Resolved complex issues related to prescription drug claims and prior authorizations, collaborating with internal teams and pharmacies to ensure timely resolutions. Assisted customers during Medicare open enrollment periods by guiding them through plan selection, eligibility verification, and enrollment processes. Documented and maintained accurate records of customer interactions and issue resolutions in the CRM system while adhering to HIPAA regulations to protect sensitive information. Demonstrated empathy and professionalism when handling escalated calls, de-escalating situations, and ensuring a positive customer experience. Monitored and reported trends in customer concerns to identify opportunities for process improvement and increased service efficiency. "}
                    description={"As a customer service professional specializing in Medicare Part D, I provided knowledgeable and empathetic support to beneficiaries, assisting with plan benefits, claims, and enrollment processes. I ensured compliance with CMS regulations, resolved complex issues related to prescription drug coverage, and maintained accurate records in adherence to HIPAA standards. My role emphasized delivering a seamless customer experience while contributing to process improvements and ensuring customers understood their healthcare options."} />
                <JobPosition key={2} fonts={[orbitron]} positionName={"Freelance Web Developer"} duration={"January 2024 - Ongoing"} responsibilities={"Led the development and deployment of various web-based projects, ensuring seamless functionality, high performance, and scalability. Collaborated directly with clients to gather requirements and deliver tailored, efficient solutions that align with their business needs. Utilized a diverse tech stack—including AWS, HTML, CSS, JavaScript, React, Node.js, and MongoDB—to design, build, and optimize applications for both performance and user experience. Provided ongoing maintenance and updates to deployed products, focusing on improving SEO rankings, implementing product upgrades, and ensuring reliability. Successfully delivered projects such as ProfitSNFT, which achieved up to 3,000 views in a single month, showcasing its scalability and effectiveness."} description={"As a full-stack developer, I led end-to-end development and deployment of web-based projects, ensuring robust functionality, scalability, and client satisfaction. My expertise spans across AWS, React, Node.js, MongoDB, and modern front-end technologies, allowing me to design and build optimized solutions tailored to client needs. I collaborated directly with clients to gather requirements, implement custom features, and continuously improve deployed products with SEO optimization and feature upgrades."} />
                <JobPosition key={3} fonts={[orbitron]} positionName={"Computer Support Specialist"} duration={"November 2024 - Ongoing"} responsibilities={"Led and managed all technology-related initiatives for the Langara French Club, ensuring smooth operations and maintaining a reliable digital infrastructure. Designed and automated email campaigns to effectively communicate with and engage club members, enhancing member retention and participation. Established clear communication channels for the team and members to streamline collaboration and information sharing. Automated key processes to improve operational efficiency, reduce manual effort, and save time for club activities."} description={"As the Computer Support Specialist for the Langara French Club, I oversaw all technical operations to ensure efficient and seamless digital support for the club’s activities. I implemented and automated email campaigns to improve member engagement and participation while creating effective communication channels to foster collaboration within the team. Additionally, I optimized workflows by automating key processes, contributing to the club's operational efficiency and enhancing overall productivity."} />
                <JobPosition key={4} fonts={[orbitron]} positionName={"Team Lead"} company ={"HackBricksTeam"} duration={"October 2024 - Ongoing"}  responsibilities={"Led a team of seven developers in the planning, design, and execution of diverse projects, ensuring efficient workflows and successful project delivery. Mentored and guided team members by providing technical advice and supporting pathway decisions, fostering both individual growth and effective collaboration. Managed and organized over five open-source projects, leveraging version control systems like Git to maintain code integrity, ensure accessibility, and facilitate seamless collaboration among contributors."} description={"As a team leader, I directed a group of seven developers through all phases of project development, from planning to execution, ensuring timely and high-quality results. I provided mentorship and technical guidance to promote individual growth and teamwork while facilitating the resolution of complex technical challenges. My experience includes managing more than five open-source projects, utilizing Git to maintain version control and ensure collaboration efficiency, while upholding code quality and accessibility for the broader development community."}/>
            </div>

        </motion.div>
    );
}

export default Experience;