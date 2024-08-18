import React from 'react';
import {Image, Box} from "@mantine/core";
import start_flag from "../assets/hero/flag_start_button.svg"
import ducky_red from "../assets/hero/duck_racers-06.svg";
import ducky_blue from "../assets/hero/duck_racers-04.svg";
import ducky_green from "../assets/hero/duck_racers-10.svg";
import ducky_yellow from "../assets/hero/duck_racers-05.svg";

function DucksRacing() {

    const handleStartRace = () => {
        const green = document.querySelector('.m_green');
        const blue = document.querySelector('.m_blue');
        const red = document.querySelector('.m_red');
        const yellow = document.querySelector('.m_yellow');
        const green_rev = document.querySelector('.m_green_reverse');
        const blue_rev = document.querySelector('.m_blue_reverse');
        const red_rev = document.querySelector('.m_red_reverse');
        const yellow_rev = document.querySelector('.m_yellow_reverse');

        const starttext = document.querySelector('.start_text');
        if (green) {
            green.classList.add('animation-green');
        }
        if (blue) {
            blue.classList.add('animation-blue');
        }
        if (red) {
            red.classList.add('animation-red');
            red.classList.remove('m_bumping_red');
        }
        if (yellow) {
            yellow.classList.add('animation-yellow');
        }

        if (green_rev) {
            green_rev.classList.add('animation-green-reverse');
        }
        if (blue_rev) {
            blue_rev.classList.add('animation-blue-reverse');
        }
        if (red_rev) {
            red_rev.classList.add('animation-red-reverse');
        }
        if (yellow_rev) {
            yellow_rev.classList.add('animation-yellow-reverse');
        }

        if (starttext) {
            starttext.classList.add('hidden');
        }
    };

    return (
        <div>
            <Box
                pos="fixed"
                top="300px"
                left="54%"
                className="start_flag"
                onClick={handleStartRace}
            >
                <Image
                    w="160px"
                    src={start_flag}
                />
                <div className="start_text">
                    Start Race!
                </div>
            </Box>
            <Box
                top="385px"
                pos="fixed"
                w="100%"
                style={{overflow: "hidden"}}
            >
                <div className="road_curve">
                    <div className="m_bumping" style={{animationDuration: '150ms'}}>
                        <div className="m_green">
                            <Image pos="relative" w="185px" src={ducky_green} alt="decappy"/>
                        </div>
                    </div>
                    <div className="m_bumping_red">
                        <div className="m_red">
                            <Image pos="relative" w="185px" src={ducky_red} alt="big red"/>
                        </div>
                    </div>
                    <div className="m_bumping" style={{animationDuration: '200ms'}}>
                        <div className="m_yellow">
                            <Image pos="relative" w="185px" src={ducky_yellow} alt="he/him"/>
                        </div>
                    </div>
                    <div className="m_bumping">
                        <div className="m_blue">
                            <Image pos="relative" w="185px" src={ducky_blue} alt="cool guy"/>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default DucksRacing;
