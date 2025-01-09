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
import useWindowSize from '../hooks/useWindowSize';

const iconModifierComputer = 30;
const primary = "#a33100";
const velocity = 80;


const Introduction = ({ fonts }) => {

    const orbitron = fonts[0];
    const { width, height } = useWindowSize();
    const constraintsRef = useRef(null);
    const dragControls = useDragControls();

    const gitIconRef = useRef(null);
    const npmIconRef = useRef(null);
    const reactIconRef = useRef(null);
    const cppIconRef = useRef(null);
    const javaIconRef = useRef(null);
    const javaScriptIconRef = useRef(null);

    const iconsRefArray = [gitIconRef, npmIconRef, reactIconRef, cppIconRef, javaIconRef, javaScriptIconRef];

    useEffect(() => {

        for (let i = 0; i < iconsRefArray.length; i++) {

            const container = constraintsRef.current;
            const iconContainer = iconsRefArray[i].current;

            if ((!container || !iconContainer)) return;
            let y = 0;
            let x = 0;
            let yVelocity = (Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1);
            let xVelocity = (Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1);

            function move() {


                // Check for collisions with the container boundaries
                const containerRect = container.getBoundingClientRect();
                const iconRect = iconContainer.getBoundingClientRect();

                const adjustedYStart = containerRect.y;
                const adjustedYLimit = containerRect.y + window.scrollY + containerRect.height;
                const adjustedIconLimit = iconRect.y + window.scrollY + iconRect.height;


                if(adjustedYLimit == adjustedIconLimit){
                    x=0;
                    y=0;
                }

                if (adjustedIconLimit > adjustedYLimit || iconRect.y < adjustedYStart) {
                    yVelocity *= -1;
                }

                if (iconRect.x < containerRect.x || iconRect.x + iconRect.width > containerRect.x + containerRect.width) {
                    xVelocity *= -1;
                }

                y += yVelocity;
                x += xVelocity;

                iconContainer.style.transform = `translate(${x}px, ${y}px)`;


                requestAnimationFrame(move);


            }

            move();
        }

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
                <h1 className={orbitron.className}> Hello 👋 <span className="secondParagraph">My name is <span className="authorName">Axel Velasquez</span></span> </h1>
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
                    <ArrowMoveDownLeftIcon size={width / 10} color={primary} className="introductionArrow" />
                </div>
            </div>

            <motion.div className="iconContainer">
                <motion.div
                    className="individualIcon"

                    ref={gitIconRef}

                >
                    <Github01Icon size={width / iconModifierComputer} color={"white"} />
                </motion.div>
                <motion.div className="individualIcon"

                    ref={npmIconRef}
                >
                    <NpmIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon"

                    ref={reactIconRef}>
                    <ReactIcon size={width / iconModifierComputer} color={"#61dbfb"} />
                </motion.div>
                <motion.div className="individualIcon"

                    ref={cppIconRef}>
                    <CIcon size={width / iconModifierComputer} color={"#015482"} />
                </motion.div>
                <motion.div className="individualIcon"

                    ref={javaIconRef}>
                    <JavaIcon size={width / iconModifierComputer} color={"red"} />
                </motion.div>
                <motion.div className="individualIcon"

                    ref={javaScriptIconRef}>
                    <JavaScriptIcon size={width / iconModifierComputer} color={"yellow"} />
                </motion.div>
            </motion.div>
            <WhoAmI className={orbitron.className} />
        </motion.div>
    );
};

export default Introduction;