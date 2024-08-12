import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import FlagButton from "./FlagButton";
import Banner from "./Banner";
import Road from "../assets/main_road.svg";
import DucksRacing from "./DucksRacing";
import VHLogo from "../assets/VHlogo_XI.svg";

function Hero() {
    const {height, width} = useViewportSize();

    return (
        <>
            <div style={{height: height, width: width, margin: 0}}>
                <Banner/>
                <Image
                    pos="absolute"
                    top="71.5vh"

                    h="23.5vh"

                    src={Road}
                    alt="Road 4 duck 2 race"
                    style={{overflow: "hidden"}}
                />
                <DucksRacing/>
            </div>
        </>
    );
}

export default Hero;
