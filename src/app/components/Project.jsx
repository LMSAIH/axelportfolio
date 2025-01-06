import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const Project = ({ fonts, source }) => {

  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsActive(true);
    }
  };

  const [active, setIsActive] = useState(false);

  return (
    <motion.div className="project">
      <div className="projectImageContainer"   style={{
          filter: active ? "none" : "blur(5px)",
          backgroundColor: active ? "transparent" : "rgba(0, 0, 0, 0.5)",
          transition: "filter 0.1s ease, background-color 0.1s ease",
        }}>
        <video width="1000px" loop preload="auto" onMouseEnter={handlePlay} onClick={handlePlay} ref = {videoRef}>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag, please try in a different browser.
        </video>
      </div>
    </motion.div>
  );
}

export default Project;