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

        const updatePos = (icon, iconloc,limits) => {

            let{x:posX, y:posY} = iconloc;

            let { velocityX, velocityY } = icon;
            console.log(icon);
            let {x:left, y:top, width, height} = limits;          

            // Bounce off edges
            if (posY <= top || posY >= height) velocityY *= -1;
            if (posX <= left || posX >= width) velocityX *= -1;

        }
        
        const iconTimerChange = setInterval(() => {

            if (!constraintsRef.current) return;

            for (let i = 0; i < iconsArray.length; i++) {
                const limits = constraintsRef.current.getBoundingClientRect();
                const iconLoc = gitIconRef.current.getBoundingClientRect();
                
                updatePos(iconsArray[i], iconLoc,limits);

                let {y:posY, x:posX} = iconsArray[i];
                let {x,y, width, height} = limits;
                console.log(x,y);
                let maxDisplacementTop = (y+height)-posY;
                let maxDisplacementRight = (x+width)-posX;

                setGitDisplacementX((Math.random()*maxDisplacementRight)*iconsArray[i].velocityX);
                setGitDisplacementY((Math.random()*maxDisplacementTop)*iconsArray[i].velocityY);
                
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
            initial={{scale:0, duration:1}}
            whileInView={{scale:1,duration:1}}

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
                    ref = {gitIconRef}
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