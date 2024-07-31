import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import asurion from "../assets/sponsors/asurion-vector-logo.svg";
import phosphorus from "../assets/sponsors/asurion-vector-logo.svg"
import grainger from "../assets/sponsors/grainger-vector-logo.svg";
import mongodb from "../assets/sponsors/asurion-vector-logo.svg";
import capitalone from "../assets/sponsors/asurion-vector-logo.svg";
import sponsors_banner from "../assets/sponsors_banner.svg";

const sponsors = [
    {
        name: asurion,
        link: "x.vandyhacks.org",
    },
    {
        name: grainger,
        link: "x.vandyhacks.org",
    },
    {
        name: capitalone,
        link: "x.vandyhacks.org",
    },
    {
        name: mongodb,
        link: "x.vandyhacks.org",
    },
    {
        name: phosphorus,
        link: "x.vandyhacks.org",
    }
]

function Sponsors() {
    const {height, width} = useViewportSize();

    return (
        <>
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
                <Image w="85vh" src={sponsors_banner} style={{color: 'white', marginBottom: "-5px"}} alt="top of about page"/>

                {sponsors.map((sponsor) => (
                        <div className="sponsor_logo">
                            <Image
                                w="50vh"
                                m="5px"
                                src={sponsor.name}
                                alt="sponsor logo"
                            />
                        </div>
                ))}
            </Flex>
        </>
    );
}

export default Sponsors;
