import React from "react";
import { Image, Flex, Text } from "@mantine/core";

import VHLogo from "../assets/VH_Logo_Without_Text_Dark.png";
import JoinButton from "./JoinButton";

function Banner() {
    return (
        <>
            <Flex
                top="35vh"
                pos="absolute"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                gap="sm"
            >
                <Image w="20vh" src={VHLogo} alt="VandyHacks Logo" />
                <Text>Racing Edition</Text>
                <Text>October 30th - 31st</Text>
                <JoinButton />
            </Flex>
        </>
    );
}

export default Banner;
