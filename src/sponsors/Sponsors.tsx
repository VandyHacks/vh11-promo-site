import React from "react";
import {Image, Flex, Text, Grid} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import sponsors_banner from "../assets/sponsors/sponsors_banner.svg";
import LogosGrid from "./LogosGrid";
import Stars from "./Stars";

function Sponsors() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Stars />
            <Flex
                w="100%"
                gap="md"
                display="flex"
                direction={"column"}
                justify={"center"}
                align="center"
            >
                <div className="header_text" style={{color: "#007AC3", fontSize: "80px", margin: "0"}}>
                    Sponsors
                </div>
                <Image
                    w="85vh"
                    src={sponsors_banner}
                    style={{color: 'white', marginBottom: "20px"}}
                    alt="ducks on pedestal over sponsors"
                />
                <LogosGrid />
            </Flex>
        </>
    );
}

export default Sponsors;
