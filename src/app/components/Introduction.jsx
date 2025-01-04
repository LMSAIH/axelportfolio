"use client";

import { motion, useDragControls } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Github01Icon } from 'hugeicons-react';
import { NpmIcon } from 'hugeicons-react';
import { ReactIcon } from 'hugeicons-react';
import { CIcon } from 'hugeicons-react';
import { JavaIcon } from 'hugeicons-react';
import { JavaScriptIcon } from 'hugeicons-react';
import { ArrowMoveDownLeftIcon } from 'hugeicons-react';
import WhoAmI from './WhoAmI';

const iconModifierComputer = 30;
const primary = "#a33100";
const velocity = 80;


const Introduction = ({fonts}) => {

    const orbitron = fonts[0];
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const constraintsRef = useRef(null);
    const dragControls = useDragControls();

    const [gitIconPos, setGitIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const gitIconRef = useRef(null);


    const [npmIconPos, setNpmIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const npmIconRef = useRef(null);

    const [reactIconPos, setReactIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const reactIconRef = useRef(null);

    const [cppIconPos, setCppIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const cppIconRef = useRef(null);

    const [javaIconPos, setJavaIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const javaIconRef = useRef(null);

    const [javaScriptIconPos, setJavaScriptIconPos] = useState({ velocityX: 1, velocityY: 1, displacement: [10, 10] });
    const javaScriptIconRef = useRef(null);

    const iconsArray = [gitIconPos, npmIconPos, reactIconPos, cppIconPos, javaIconPos, javaScriptIconPos];
    const iconsStateSetters = [setGitIconPos, setNpmIconPos, setReactIconPos, setCppIconPos, setJavaIconPos, setJavaScriptIconPos];

    const iconsRefArray = [gitIconRef, npmIconRef, reactIconRef, cppIconRef, javaIconRef, javaScriptIconRef];


    useEffect(() => {

        const reSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", reSize);

        //modified to no avail, leave until later for my mental sanity sake v2
        const iconTimerChange = setInterval(() => {

            if (!constraintsRef.current) return;

            for (let i = 0; i < iconsArray.length; i++) {
                const limits = constraintsRef.current.getBoundingClientRect();
                const iconLoc = iconsRefArray[i].current.getBoundingClientRect();
                const currentIcon = iconsArray[i];

                if (!limits || !iconLoc) {
                    return;
                }

                let { y: posY, x: posX, width: iconWidth, height: iconHeight, bottom: iconBottom, right: iconRight } = iconLoc;
                let { x, y, width, height, bottom, right, left } = limits;

                let displacementX = Math.random() * width;
                let displacementY = Math.random() * height;

                if (iconsArray[i].velocityY > 0) {
                    if (iconBottom + displacementY > bottom) {
                        displacementY = bottom - iconBottom;
                    }
                } else {
                    if (posY - displacementY < top) {
                        displacementY = posY - top;
                    }
                }


                if (iconsArray[i].velocityX > 0) {
                    if (iconRight + displacementX > right) {
                        displacementX = right - iconRight;
                    }
                } else {
                    if (posX - displacementX < left) {
                        displacementX = posX - left;
                    }
                }

                iconsStateSetters[i]((prevState) => ({
                    ...prevState,
                    velocityX: currentIcon.velocityX,
                    velocityY: currentIcon.velocityY,
                    displacement: [displacementX, displacementY],
                }));

                iconsArray[i].velocityY *= -1;

            }



        }, 1000);

        return () => {
            window.removeEventListener("resize", reSize);
            clearInterval(iconTimerChange);
        };
    }, []);

    const iconModifierComputer = 20; // Adjust this as needed

    return (
        <motion.div
            className="introduction"
            id="introduction"
            ref={constraintsRef}
            initial={{ scale: 0, duration: 1 }}
            whileInView={{ scale: 1, duration: 1 }}

        >
            <div className="nameContainer">
                <h1 className = {orbitron.className}> Hello 👋 <span className="secondParagraph">My name is <span className="authorName">Axel Velasquez</span></span> </h1>
            </div>
            <div className="middleContainer">
                <motion.div
                    className="mainImgContainer"
                    drag
                    dragConstraints={constraintsRef}
                    dragControls={dragControls}
                    style={{ cursor: "grab" }}
                >
                    <Image src="/mainScreenPicture.svg" width={width / 2} height={width / 2} alt="Coder picture" unoptimized />
                </motion.div>
                <div className={`dragMe ${orbitron.className}`}>
                    <p> Drag me!</p>
                    <ArrowMoveDownLeftIcon size = {width/10} color = {primary} className = "introductionArrow"/> 
                </div>
            </div>

            <motion.div className="iconContainer">
                <motion.div
                    className="individualIcon"
                    animate={{
                        x: gitIconPos.displacement[0],
                        y: gitIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={gitIconRef}

                >
                    <Github01Icon size={width / iconModifierComputer} color={"white"} />
                </motion.div>
                <motion.div className="individualIcon"
                    animate={{
                        x: npmIconPos.displacement[0],
                        y: npmIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={npmIconRef}
                >
                    <NpmIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon"
                    animate={{
                        x: reactIconPos.displacement[0],
                        y: reactIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={reactIconRef}>
                    <ReactIcon size={width / iconModifierComputer} color={"#61dbfb"} />
                </motion.div>
                <motion.div className="individualIcon"
                    animate={{
                        x: cppIconPos.displacement[0],
                        y: cppIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={cppIconRef}>
                    <CIcon size={width / iconModifierComputer} color={"#015482"} />
                </motion.div>
                <motion.div className="individualIcon"
                    animate={{
                        x: javaIconPos.displacement[0],
                        y: javaIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={javaIconRef}>
                    <JavaIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon"
                    animate={{
                        x: javaScriptIconPos.displacement[0],
                        y: javaScriptIconPos.displacement[1],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={javaScriptIconRef}>
                    <JavaScriptIcon size={width / iconModifierComputer} color={"yellow"} />
                </motion.div>
            </motion.div>
            <WhoAmI className = {orbitron.className}/>
        </motion.div>
    );
};

export default Introduction;