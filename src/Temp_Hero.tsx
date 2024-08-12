import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import { Button } from '@mantine/core';
import {useViewportSize} from "@mantine/hooks";
import VHLogo from "./assets/hero/VHlogo_XI.svg";

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
                <Image w="80vh" src={VHLogo} alt="VandyHacks Logo"/>

                <Text className="header_text">
                    VANDYHACKS XI
                </Text>
                <Text className="hero_text">
                    Vanderbilt's student-run hackathon
                </Text>
                <Text className="hero_text" font-weight={"600px"}>Sept. 28-29  |  Nashville, TN</Text>
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
