"use client";

import { motion, useDragControls } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Introduction = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const constraintsRef = useRef(null);
    const dragControls = useDragControls();

    useEffect(() => {

        const reSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", reSize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);



    return (


        <motion.div
            className="introduction"
            id="introduction"
            initial={{ y: 0, scale: 1.01 }}
            animate={{ y: height / 10 }}
            transition={{ duration: 2 }}
            ref={constraintsRef}
            onPointerDown={(event) => dragControls.start(event)}
        >
            <div className="nameContainer">
                <h1> Axel Velasquez </h1>
            </div>
            <motion.div className="mainImgContainer" drag
              
                dragConstraints={constraintsRef}
                dragControls={dragControls}
                style={{ cursor: "grab" }}
            >
                <Image src="/mainScreenPicture.svg" width={width / 2} height={width / 2} alt="Coder picture" unoptimized />
            </motion.div>
        </motion.div>
    );
}

export default Introduction;