import React from "react";
import {Image} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import Banner from "./Banner";
import Road from "../assets/main_road.svg";

function Hero() {
    const {height, width} = useViewportSize();

    return (
        <>
            <div style={{height: height, width: width, margin: 0}}>
                <Banner/>
                {/*<DucksRacing/>*/}
            </div>
        </>
    );
}

export default Hero;
