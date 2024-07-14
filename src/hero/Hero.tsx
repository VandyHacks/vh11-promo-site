import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import FlagButton from "./FlagButton";
import Banner from "./Banner";

function Hero() {
    const { height, width } = useViewportSize();

    return (
        <>
        
            <div style={{height: height, width: width, margin: 0}}className="main-road">
                <FlagButton top={"10vh"} left={"5vw"} right={"auto"} bottom={"auto"} name="About" />
                <FlagButton top={"3vh"} left={"45vw"} right={"auto"} bottom={"auto"} name="Speakers" />
                <FlagButton top={"10vh"} left={"auto"} right={"5vw"} bottom={"auto"} name="FAQ" />
                <FlagButton top={"auto"} left={"5vw"} right={"auto"} bottom={"10vh"} name="Sponsors" />
                <FlagButton top={"auto"} left={"auto"} right={"5vw"} bottom={"10vh"} name="Sponsors" />
                <Banner />
            </div>
        </>
    );
}

export default Hero;
