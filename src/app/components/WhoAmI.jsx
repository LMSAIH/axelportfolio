import { Idea01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WhoAmI = () => {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const triggerHeight = window.innerHeight - (window.innerHeight/10);
            const element = document.querySelector(".whoAmI");
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
        <motion.div
            className="whoAmI"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="whoAmIContent">
                <Idea01Icon size="5rem" className="eurekaIcon" color="yellow" />
                <p>
                    I’m a <span className="whoAmIColored">software developer</span> with a passion for creating innovative and <span className="whoAmIColored">impactful projects</span>. I enjoy collaborating with non-profit organizations, connecting with people from diverse backgrounds, and taking on freelance opportunities. Based in Vancouver, BC, Canada, I’m always eager to embrace <span className="whoAmIColored">new challenges</span> and expand my skills with the latest technologies.
                </p>
            </div>
        </motion.div>
    );
};

export default WhoAmI;
