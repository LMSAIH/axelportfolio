import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HtmlInjector from "../injectors/HtmlInjector";


const Project = ({ fonts, source, number, projectTitle, htmlContent, skills }) => {

  const videoRef = useRef(null);
  const orbitron = fonts[0];



  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsActive(true);
    }
  };

  const [active, setIsActive] = useState(false);

  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {

    const handleScroll = () => {
      const triggerHeight = window.innerHeight - (window.innerHeight / 10);
      const element = document.querySelector(".project" + number);
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
    <motion.div className={`project project${number}`} initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}>
      <div className="projectBallTop"></div>
      <div className="projectBallBottom"></div>
      <div className="projectImageContainer" style={{
        filter: active ? "none" : "blur(5px)",
        backgroundColor: active ? "transparent" : "rgba(0, 0, 0, 0.5)",
        transition: "filter 0.15s ease, background-color 0.15s ease",
      }}>
        <video muted preload="auto" playsInline loop onMouseEnter={handlePlay} onClick={handlePlay} ref={videoRef}>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag, please try in a different browser.
        </video>
      </div>
      <div className="projectContent">
        <h3 className={`${orbitron.className} projectTitle`}> {projectTitle} </h3>
        <HtmlInjector htmlContent={htmlContent} className={"projectDescription"} />

        <div className="techIconsContainer">
          {skills &&
            skills.map((Icon, index) => (
              <div key={index} className={`projectTechIcon`}>
                {<Icon />}
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;