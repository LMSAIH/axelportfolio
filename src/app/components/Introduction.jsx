"use client";

import { motion, useDragControls } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import { Github01Icon, GithubIcon } from 'hugeicons-react';
import { NpmIcon } from 'hugeicons-react';
import { ReactIcon } from 'hugeicons-react';
import { CIcon } from 'hugeicons-react';
import { JavaIcon } from 'hugeicons-react';
import { JavaScriptIcon } from 'hugeicons-react';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const iconModifierComputer = 30;
const primary = "#a33100";
const velocity = 80;


const Introduction = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const constraintsRef = useRef(null);
    const dragControls = useDragControls();

    const [gitDisplacementX, setGitDisplacementX] = useState([10]);
    const [gitDisplacementY, setGitDisplacementY] = useState([10]);

    const [gitIconPos, setGitIconPos] = useState({ velocityX: 1, velocityY: 1 });
    const gitIconRef = useRef(null);

    const iconsArray = [gitIconPos];

    useEffect(() => {

        const reSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", reSize);

        //modified to no avail, leave until later for my mental sanity sake v2
        const iconTimerChange = setInterval(() => {

            if (!constraintsRef.current) return;

            for (let i = 0; i < iconsArray.length; i++) {
                const limits = constraintsRef.current.getBoundingClientRect();
                const iconLoc = gitIconRef.current.getBoundingClientRect();

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

                // Calculate new displacements with adjusted velocity
                setGitDisplacementX(displacementX * iconsArray[i].velocityX);
                setGitDisplacementY(displacementY * iconsArray[i].velocityY);
                iconsArray[i].velocityY *= -1;
                iconsArray[i].velocityX *= -1;

            }



        }, 1000);

        return () => {
            window.removeEventListener("resize", reSize);
            clearInterval(iconTimerChange);
        };
    }, [iconsArray]);

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
                <h1> Axel Velasquez </h1>
            </div>
            <motion.div
                className="mainImgContainer"
                drag
                dragConstraints={constraintsRef}
                dragControls={dragControls}
                style={{ cursor: "grab" }}
            >
                <Image src="/mainScreenPicture.svg" width={width / 2} height={width / 2} alt="Coder picture" unoptimized />
            </motion.div>

            <motion.div className="iconContainer">
                <motion.div
                    className="individualIcon"
                    animate={{
                        x: gitDisplacementX,
                        y: gitDisplacementY,
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    ref={gitIconRef}

                >
                    <Github01Icon size={width / iconModifierComputer} color={"white"} />
                </motion.div>
                <motion.div className="individualIcon">
                    <NpmIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon">
                    <ReactIcon size={width / iconModifierComputer} color={"#61dbfb"} />
                </motion.div>
                <motion.div className="individualIcon">
                    <CIcon size={width / iconModifierComputer} color={"#015482"} />
                </motion.div>
                <motion.div className="individualIcon">
                    <JavaIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon">
                    <JavaScriptIcon size={width / iconModifierComputer} color={"yellow"} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Introduction;