import React from "react";
import {Image, Flex, Box} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import sponsors_banner from "../assets/sponsors/sponsors_banner.svg";
import sunset from "../assets/sponsors/sponsors_sunrise.svg"
import LogosGrid from "./LogosGrid";
import Stars from "./Stars";

function Sponsors() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Image src={sunset} />
            <Stars />
            <Flex
                w="100%"
                bg="#1E2C42"
                gap="md"
                display="flex"
                direction={"column"}
                justify={"center"}
                align="center"
            >
                <Box
                    pos={"absolute"}


                    bg="#004400"
                >

                </Box>
                <div className="header_text" style={{color: "white", fontSize: "80px", margin: "0"}}>
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
