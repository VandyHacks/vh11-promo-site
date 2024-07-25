import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import { Button } from '@mantine/core';
import {useViewportSize} from "@mantine/hooks";
import VHLogo from "./assets/VHlogo_racing.svg";
import ducky_red from "./assets/ducky_red.svg";
import ducky_blue from "./assets/ducky_blue.svg";
import ducky_green from "./assets/ducky_green.svg";

function Temp_Hero() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Flex
                top="5vh"
                pos="relative"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                gap="sm"
            >
                <Image w="70vh" src={VHLogo} alt="VandyHacks Logo"/>

                <div className="m_green">
                    <Image pos="relative" w="17vh" src={ducky_green} alt="Janice"/>
                </div>
                <div className="m_red">
                    <Image pos="relative" w="17vh" src={ducky_red} alt="Jennifer"/>
                </div>
                <div className="m_bumping">
                    <div className="m_blue">
                        <Image pos="relative" w="17vh" src={ducky_blue} alt="Jessica"/>
                    </div>
                </div>

                <Text className="hero_text">
                    Vanderbilt's student-run hackathon
                </Text>
                <Text className="hero_date">September 27-29th</Text>
                <Button className="register">
                    Register
                </Button>
                <Text className="sub_text">
                    If you want more information or are interested in sponsoring us,
                    please contact us at <br></br> chloe.p.nixon@vanderbilt.edu and aryan.garg@vanderbilt.edu
                </Text>

            </Flex>
        </>
    );
}

export default Temp_Hero;
