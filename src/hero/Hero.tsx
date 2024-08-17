import React from "react";
import {Image} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import Banner from "./Banner";
import DucksRacing from "./DucksRacing";
import background from "../assets/hero/hero_background.svg";

function Hero() {
    const {height, width} = useViewportSize();

    return (
        <>
            <div style={{height: height, width: width, margin: 0, position: "relative", zIndex: 0}}>
                <Image
                    pos="fixed"
                    h="850px"
                    style={{overflow: "hidden", zIndex: -5}}
                    src={background}
                    alt="hero background"
                />
                <Banner/>
                <DucksRacing/>

            </div>
        </>
    );
}

export default Hero;
