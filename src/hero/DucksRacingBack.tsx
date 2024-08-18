import React from 'react';
import {Image, Box} from "@mantine/core";
import ducky_red from "../assets/hero/duck_racers-06.svg";
import ducky_blue from "../assets/hero/duck_racers-04.svg";
import ducky_green from "../assets/hero/duck_racers-10.svg";
import ducky_yellow from "../assets/hero/duck_racers-05.svg";

function DucksRacingBack() {

    return (
        <>
            <Box
                top="19vh"
                pos="fixed"
                w="100%"
                style={{overflow: "hidden", zIndex: -5}}
            >
                <div className="road_curve">
                    <div className="m_green_reverse">
                        <Image pos="relative" w="9vh" src={ducky_green} style={{transform: "scaleX(-1)"}} alt="decappy"/>
                    </div>
                    <div className="m_red_reverse">
                        <Image pos="relative" w="9vh" src={ducky_red} style={{transform: "scaleX(-1)"}} alt="big red"/>
                    </div>
                    <div className="m_yellow_reverse">
                        <Image pos="relative" w="9vh" src={ducky_yellow} style={{transform: "scaleX(-1)"}} alt="he/him"/>
                    </div>
                    {/*<div className="m_blue_reverse">*/}
                    {/*    <Image pos="relative" w="9vh" src={ducky_blue} style={{transform: "scaleX(-1)"}} alt="cool guy"/>*/}
                    {/*</div>*/}
                </div>
            </Box>
        </>
    );
}

export default DucksRacingBack;
