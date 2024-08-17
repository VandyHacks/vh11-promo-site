import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import "./Sponsors.css";
import sponsors_banner from "../assets/sponsors/sponsors_banner.svg";
import sunset from "../assets/sponsors/sponsors_sunrise.svg"
import LogosGrid from "./LogosGrid";
import Stars from "./Stars";

function Sponsors() {

    return (
        <div style={{position: "relative", width: "100%"}}>
            <Image bg="#1E2C42" pb="15vh" src={sunset} w="auto" />
            <Flex
                w="100%"
                bg="#1E2C42"
                gap="md"
                pos="relative"
                display="flex"
                direction={"column"}
                justify={"center"}
                align="center"
                pb="5vh"
            >
                <div
                    className="header_text"
                    style={{color: "white", fontSize: "90px", margin: "0", position: "relative"}}>
                    Sponsors
                </div>
                <Stars />
                <Image
                    w="700px"
                    src={sponsors_banner}
                    style={{color: 'white', marginBottom: "20px", zIndex: 100}}
                    alt="ducks on pedestal over sponsors"
                />
                <LogosGrid />
                <Text
                    className="body_text"
                    fz="30px"
                    c="#FCE147"
                >
                    And more! Coming soon ...
                </Text>
            </Flex>
        </div>
    );
}

export default Sponsors;
