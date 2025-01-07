import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";


const Project = ({ fonts, source, number, projectTitle, projectContent }) => {

  const videoRef = useRef(null);
  const orbitron = fonts[0];

  const { width, height } = useWindowSize();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay failed. User interaction is required.", err);
      });
    }
  }, []);

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
      <div className="projectImageContainer" style={{
        filter: active ? "none" : "blur(5px)",
        backgroundColor: active ? "transparent" : "rgba(0, 0, 0, 0.5)",
        transition: "filter 0.15s ease, background-color 0.15s ease",
      }}>
        <video width={width/2.5} loop preload="auto" onMouseEnter={handlePlay} onClick={handlePlay} ref={videoRef}>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag, please try in a different browser.
        </video>
      </div>
      <div className="projectContent">
        <h3 className={`${orbitron.className} projectTitle`}> {projectTitle} </h3>
        <p> {projectContent} </p>
        <div className="techIconsContainer">
          
        </div>
      </div>
    </motion.div>
  );
}

export default Project;