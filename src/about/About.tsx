import React from "react";
import {Image, Text, Flex, Box} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import about_top from "../assets/about/about_top.svg";
import about_road from "../assets/about/about_road.svg";
import about_front_grass from "../assets/about/about_front_grass.svg";
import about_bottom from "../assets/about/about_bottom.svg";
import ducky_red from "../assets/hero/ducky_red.svg";

function About() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Image
                bg="#C7FFF6"
                src={about_top}
                ml="auto"
                w="100%"
                style={{color: 'white', marginTop: "150px", marginBottom: "-45px"}}
                alt="top of about page"/>
            <Flex
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#009e44"
            >
                <div className="header_text" style={{color: 'white'}}>
                    About
                </div>
                <Text
                    className="body_text"
                    c="white"
                    fz="20px"
                    m="10px 100px 20px 100px"
                >
                    Code, collaborate, learn, explore, and network at Vanderbilt's official collegiate hackathon,
                    VandyHacks!
                    <br></br>
                    As our 11th annual hackathon, this in-person event includes both student and company-led
                    workshops, a career fair, games, events, full two-day catering, internship panels, speaker events,
                    and the premier 24-hour hackathon with thousand of dollars in prizes.
                    As the largest hackathons in the south, VandyHacks has had thousands of
                    projects submitted by students over the course of 11 incredible years, and we hope you can join
                    us in this experience this September, 28th-29th.
                    <br></br>
                    We hope to see you on the racetrack at VandyHacks XI!
                </Text>
                <Image w="100%" mt="-25px" src={about_road} alt="road for ducky"/>
                <div className="m_about_curve">
                    <div>
                        <Image pos="absolute" w="15%" src={ducky_red} alt="Janice"/>
                    </div>
                </div>

            </Flex>
            <Image w="100%" bg="#C7FFF6" pb="15vh" src={about_bottom} alt="bottom of about page"/>

        </>
    );
}

export default About;
