import React from "react";
import {Image, Flex, Text, Button} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import VHLogo from "./assets/VHlogo_racing.svg";
import ducky_red from "./assets/ducky_red.svg";
import ducky_blue from "./assets/ducky_blue.svg";
import ducky_green from "./assets/ducky_green.svg";

function Temp_Hero() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Flex
                top="7vh"
                pos="relative"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                gap="sm"
            >
                <Image w="60vh" src={VHLogo} alt="VandyHacks Logo"/>
                <Text className="hero_text"
                >Vanderbilt's student-run hackathon</Text>
                <Text className="hero_date">September 27-29th</Text>

                <Button color="gray" radius="md" size="xl">
                    Register
                </Button>

            </Flex>
            <div className="m_green">
                <Image pos="relative" top="-50vh" w="18vh" src={ducky_green} alt="Janice"/>
            </div>
            <div className="m_red">
                <Image pos="relative" top="-53vh" w="18vh" src={ducky_red} alt="Jennifer"/>
            </div>
            <div className="m_bumping">
            <div className="m_blue">
                <Image pos="relative" top="-56vh" w="18vh" src={ducky_blue} alt="Jessica"/>
            </div>
            </div>


        </>
    );
}

export default Temp_Hero;
