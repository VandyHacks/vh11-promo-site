import React from "react";
import {Box, Flex, Image, Text, Accordion, Grid} from "@mantine/core";
import "./index.css";


function TempSpeakers() {
    return (
        <Flex
            top="3.5vh"
            w="100%"
            direction={"column"}
            justify={"center"}
            align="center"
            ta="center"
            bg="#C7FFF6"
            p="10vh 0vh 10vh 0vh"
        >
            <Text className="header_text" fz="65px" c="#1f506e">Speakers</Text>
            <Text className="body_text" c="#1f506e" fz="30px">Coming Soon ...</Text>
        </Flex>
    );
}

export default TempSpeakers;
