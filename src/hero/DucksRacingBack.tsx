import React from 'react';
import {Image, Box} from "@mantine/core";
import ducky_red from "../assets/hero/duck_racers-06.svg";
import ducky_blue from "../assets/hero/duck_racers-04.svg";
import ducky_green from "../assets/hero/duck_racers-10.svg";
import ducky_yellow from "../assets/hero/duck_racers-05.svg";

function DucksRacingBack() {

    const handleStartRace = () => {
        const green = document.querySelector('.m_green');
        const blue = document.querySelector('.m_blue');
        const red = document.querySelector('.m_red');
        const yellow = document.querySelector('.m_yellow');
        if (green) {
            green.classList.add('animation-green');
        }
        if (blue) {
            blue.classList.add('animation-blue');
        }
        if (red) {
            red.classList.add('animation-red');
        }
        if (yellow) {
            yellow.classList.add('animation-yellow');
        }
    };

    return (
        <>
            <Box
                top="20vh"
                pos="fixed"
                w="100%"
                style={{overflow: "hidden", zIndex: -5}}
            >
                <div className="road_curve">
                    <div className="m_green">
                        <Image pos="relative" w="12vh" src={ducky_green} style={{transform: "scaleX(-1)"}} alt="decappy"/>
                    </div>
                    <div className="m_red">
                        <Image pos="relative" w="12vh" src={ducky_red} style={{transform: "scaleX(-1)"}} alt="big red"/>
                    </div>
                    <div className="m_yellow">
                        <Image pos="relative" w="12vh" src={ducky_yellow} style={{transform: "scaleX(-1)"}} alt="he/him"/>
                    </div>
                    <div className="m_blue">
                        <Image pos="relative" w="12vh" src={ducky_blue} style={{transform: "scaleX(-1)"}} alt="cool guy"/>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default DucksRacingBack;
