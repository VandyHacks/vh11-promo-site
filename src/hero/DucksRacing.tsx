import React, {useState} from 'react';
import {Image, Box, Button, Flex, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
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
        <div>
            <Box
                pos="fixed"
                top="40vh"
                left="54%"
            >
                <Text
                    className="body_text"
                    pos="absolute"
                    c="white"
                    fz="25px"
                >
                <Image
                    w="20vh"
                    className="start_flag"
                    src={start_flag}
                    onClick={handleStartRace}
                />
                    Start Race!
                </Text>
            </Box>
            <Box
                top="51.5vh"
                pos="fixed"
                w="100%"
                style={{overflow: "hidden"}}
            >
                <div className="road_curve">
                    <div className="m_bumping" style={{animationDuration: '150ms'}}>
                        <div className="m_green">
                            <Image pos="relative" w="24vh" src={ducky_green} alt="decappy"/>
                        </div>
                    </div>
                    <div className="m_bumping_red">
                        <div className="m_red">
                            <Image pos="relative" w="24vh" src={ducky_red} alt="big red"/>
                        </div>
                    </div>
                    <div className="m_bumping" style={{animationDuration: '200ms'}}>
                        <div className="m_yellow">
                            <Image pos="relative" w="24vh" src={ducky_yellow} alt="he/him"/>
                        </div>
                    </div>
                    <div className="m_bumping">
                        <div className="m_blue">
                            <Image pos="relative" w="24vh" src={ducky_blue} alt="cool guy"/>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default DucksRacing;
