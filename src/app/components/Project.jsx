import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HtmlInjector from "../injectors/HtmlInjector";
import { Html5Icon } from "hugeicons-react";
import { JavaScriptIcon } from "hugeicons-react";
import { AmazonIcon } from "hugeicons-react";

const Project = ({ fonts, source, number, projectTitle, htmlContent, skills }) => {

  const videoRef = useRef(null);
  const orbitron = fonts[0];



  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsActive(true);
    }
  };

  const InjectIcons = ({ value, className }) => {
    switch (value) {
      case "html":
        return (
          <div className={className}>
            <Html5Icon />
          </div>
        );
      case "js":
        return (
          <div className={className}>
            <JavaScriptIcon />
          </div>
        );
      case "aws":
        return (
          <div className={className}>
            <AmazonIcon />
          </div>
        );
      default:
        return null;
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
      <div className="projectBallTop"></div>
      <div className="projectBallBottom"></div>
      <div className="projectImageContainer" style={{
        filter: active ? "none" : "blur(5px)",
        backgroundColor: active ? "transparent" : "rgba(0, 0, 0, 0.5)",
        transition: "filter 0.15s ease, background-color 0.15s ease",
      }}>
        <video  loop preload="auto" onMouseEnter={handlePlay} onClick={handlePlay} ref={videoRef}>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag, please try in a different browser.
        </video>
      </div>
      <div className="projectContent">
        <h3 className={`${orbitron.className} projectTitle`}> {projectTitle} </h3>
        <HtmlInjector htmlContent={htmlContent} className={"projectDescription"} />

        <div className="techIconsContainer">
          {skills && Object.entries(skills).map(([key, value]) => (
            <InjectIcons key={key} value={value} className="projectTechIcon" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;