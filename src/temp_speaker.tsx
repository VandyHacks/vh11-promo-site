import React from "react";
import {Flex, Text} from "@mantine/core";
import "./index.css";


function TempSpeakers() {
    return (
        <Flex
            top="100px"
            w="100%"
            bg="#C7FFF6"
            pos="relative"
            direction={"column"}
            justify={"center"}
            align="center"
            ta="center"
            p="100px 0px 220px 0px"
        >
            <Text mt="-150px" className="header_text" fz="65px" c="#1f506e">Speakers</Text>
            <Text className="body_text" c="#1f506e" fz="30px">Coming Soon ...</Text>
        </Flex>
    );
}

export default TempSpeakers;
