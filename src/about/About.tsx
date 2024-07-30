import React from "react";
import {Image, Flex} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import about_top from "../assets/about_top.svg";
import about_road from "../assets/about_road.svg";
import about_front_grass from "../assets/about_front_grass.svg";
import about_bottom from "../assets/about_bottom.svg";
import ducky_red from "../assets/ducky_red.svg";

function About() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Image w="100%" src={about_top} style={{color: 'white', marginTop: "220px", marginBottom: "-5px"}} alt="top of about page"/>
            <Flex
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#009e44"
            >
                <div className="header_text" style={{color: 'white', margin: "0"}}>
                    About
                </div>

                <div className="body_text" style={{color: 'white', fontSize: '24px', margin: "25px"}}>
                    VandyHacks is Vanderbilt's official collegiate hackathon, and one of
                    the largest hackathons in the South! With thousands of projects submitted over
                    the course of 11 fantastic years, VandyHacks is a opportunity for students to network,
                    learn, collaborate,
                    we invite you to a 24-hour hackathon this September 28th-29th..

                    Set against a vibrant neon theme, this fully in-person event beckons hackers
                    to craft groundbreaking projects, attend illuminating workshops, explore career
                    opportunities, and vie for coveted prizes.

                    Join us, and let's light up the future together!
                </div>

                <div className="m_about_curve">
                    <div className="m_about">
                        <Image pos="absolute" w="15%" src={ducky_red} alt="Janice"/>
                    </div>
                </div>
                <Image w="100%" src={about_road} alt="road for ducky"/>

            </Flex>
            <Image w="100%" src={about_bottom} alt="bottom of about page"/>
        </>
    );
}

export default About;
