import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import ducky_red from "../assets/ducky_red.svg";
import ducky_blue from "../assets/ducky_blue.svg";
import ducky_green from "../assets/ducky_green.svg";

function DucksRacing() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Flex
                top="70vh"
                pos="absolute"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                gap="sm"
            >
                <div className="road_curve">
                    <div className="m_green">
                        <Image pos="relative" w="19vh" src={ducky_green} alt="Janice"/>
                    </div>
                    <div className="m_red">
                        <Image pos="relative" w="19vh" src={ducky_red} alt="Jennifer"/>
                    </div>
                    <div className="m_bumping">
                        <div className="m_blue">
                            <Image pos="relative" w="19vh" src={ducky_blue} alt="Jessica"/>
                        </div>
                    </div>
                </div>
            </Flex>
        </>
    );
}

export default DucksRacing;
