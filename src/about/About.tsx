import React from "react";
import {Image, Flex, Text} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import about_top from "../assets/about_top.svg";
import about_road from "../assets/about_road.svg"
import about_bottom from "../assets/about_bottom.svg";
import ducky_red from "../assets/ducky_red.svg";
import FlagButton from "../hero/FlagButton";
import Banner from "../hero/Banner";
import VHLogo from "../assets/VHlogo_racing.svg";
import ducky_green from "../assets/ducky_green.svg";

function About() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Image w="100%" src={about_top} style={{color: 'white', marginBottom:"-5px"}} alt="top of about page"/>
            <Flex
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#009e44"
            >
                <div className="centered-text">
                    <div className="header_text" style={{color: 'white', margin:"0"}}>
                        About
                    </div>
                    <div className="body_text" style={{color: 'white', fontSize: '24px', margin:"50"}}>
                        VandyHacks is Vanderbilt's official collegiate hackathon, and one of
                        the largest hackathons in the South! With thousands of projects submitted over
                        the course of 11 years, we invite you to a 24-hour hackathon this September 28th-29th..

                        Set against a vibrant neon theme, this fully in-person event beckons hackers
                        to craft groundbreaking projects, attend illuminating workshops, explore career
                        opportunities, and vie for coveted prizes.

                        Join us, and let's light up the future together!
                    </div>
                    <br></br><br></br>
                    <div className="m_red">
                        <Image pos="absolute" w="15%" src={ducky_red} alt="Janice"/>
                    </div>
                    <Image w="100%" src={about_road} alt="road for ducky"/>
                </div>
            </Flex>
            <Image w="100%" src={about_bottom} alt="bottom of about page"/>
        </>
    );
}

export default About;
