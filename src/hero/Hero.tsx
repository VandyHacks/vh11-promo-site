import React from "react";
import {Image} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import Stars from "../Stars";
import Banner from "./Banner";
import DucksRacing from "./DucksRacing";
import DucksRacingBack from "./DucksRacingBack";
import background from "../assets/hero/hero_background.svg";
import "./Hero.css";

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
                <Stars page="hero" />
                <DucksRacing/>
                <DucksRacingBack />

            </div>
        </>
    );
}

export default Hero;
