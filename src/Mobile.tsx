import React, { useState } from 'react';
import {Image, Flex, Box, Text, Anchor, Divider, ScrollArea} from "@mantine/core";
import VHLogo from "./assets/hero/VHlogo_XI.svg";
import JoinButton from "../src/hero/JoinButton";
import {FaInstagram, FaAnchor, FaDiscord, FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";

import about_top from "./assets/about/about_top.svg";
import about_road from "./assets/about/about_road.svg";
import aboutgradient from "./assets/about/aboutbackgroundmobile.svg"
import ducky_red from "./assets/hero/ducky_red.svg";

import FAQ from "./faq/FAQ";
import sunset from "./assets/sponsors/sponsors_sunrise.svg";
import sponsors_banner from "./assets/sponsors/sponsors_banner.svg";
import LogosGrid from "./sponsors/LogosGrid";

import day_1_selected from "./assets/Day1Selected.svg";
import day_2 from "./assets/Day2.svg";
import day_1 from "./assets/Day1.svg";
import day_2_selected from "./assets/Day2Selected.svg";
import schedule_bg from "./assets/schedule/schedule_background.svg";
import Day1 from "./schedule/Day1";
import Day2 from "./schedule/Day2";

const icons = [
    {
        name: "AnchorLink",
        icon: FaAnchor,
        link: "https://anchorlink.vanderbilt.edu/organization/vandyhacks",
    },
    {
        name: "Insta",
        icon: FaInstagram,
        link: "https://www.instagram.com/vandyhacks/?hl=en",
    },
    {
        name: "Discord",
        icon: FaDiscord,
        link: "",
    },
    {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com/vandyhacks",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        link: "https://twitter.com/vandyhacks",
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        link: "https://www.youtube.com/channel/UC-sXkznjkmHLjpA5nlfdswg/featured",
    },
]

function Mobile() {

    const [day, setDay] = useState("day1");
    const [day1Image, setDay1Image] = useState(day_1_selected);
    const [day2Image, setDay2Image] = useState(day_2);

    function switchDay(dayToSwitch: string) {
        setDay(dayToSwitch);
        switch (dayToSwitch) {
            case "day1":
                setDay1Image(day_1_selected);
                setDay2Image(day_2);
                break;
            case "day2":
                setDay1Image(day_1);
                setDay2Image(day_2_selected);
                break;
            default:
                break;
        }


    }

    return (
        <>
            <Flex
                top="10vh"
                pos="relative"
                w="100%"
                // direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
            >
                <Box
                    bg="rgba(255,255,255, .9)"
                    bd="4px solid #fc3f3f"
                    pos="relative"
                    p="xl"
                    pb="0vh"
                    style={{borderRadius: "25px", zIndex: 10}}
                >
                    <Image w="90%" ml="10%" src={VHLogo} alt="VandyHacks Logo"/>

                    <div className="header_text" style={{color: '#fc3f3f', fontSize: '33px'}}>
                        VANDYHACKS XI
                    </div>

                    <div className="body_text">
                        <div className="hero_text" style={{fontSize: '19px'}}>Vanderbilt's Collegiate Hackathon</div>
                        <div className="hero_text" style={{fontSize: '19px'}}>Sept. 28-29 | Nashville, TN</div>
                    </div>

                    <JoinButton/>
                    <Flex
                        gap="18px"
                        m="2vh"
                        direction="row"
                        justify={"center"}
                        align="center"
                    >
                        {icons.map((ico) => (
                            <a
                                href={ico.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{textDecoration: "none"}}
                            >
                                <div className="social_icons" style={{fontSize: '35px'}} key={ico.name}>
                                    {React.createElement(ico.icon)}
                                </div>
                            </a>
                        ))}
                    </Flex>

                </Box>
            </Flex>
            <Image
                src={aboutgradient}
                ml="auto"
                w="100%"
                style={{marginTop: "150px"}}
                alt="top of about page"
            />
            <Image
                bg="#C7FFF6"
                src={about_top}
                ml="auto"
                w="100%"
                style={{color: 'white', marginBottom: "-45px"}}
                alt="top of about page"/>
            <Flex
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#009e44"
            >
                <div className="header_text" style={{color: 'white', fontSize: '30px', marginTop: '30px'}}>
                    About
                </div>
                <Text
                    className="body_text"
                    c="white"
                    fz="14px"
                    m="10px 30px 20px 30px"
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

                <div className="m_about_curve">
                    <div className="m_about">
                        <Image pos="absolute" w="15%" src={ducky_red} alt="Janice"/>
                    </div>
                </div>
                <Image w="100%" mt="-25px" src={about_road} alt="road for ducky"/>

            </Flex>
            <Box bg="#C7FFF6" h="8vh"></Box>
            <Box bg="#BBF9ED" h="5vh"></Box>
            <Box bg="#A8F4E6" h="5vh"></Box>

            <div
                style={{
                    backgroundColor: "#C7FFF6",
                    paddingTop: "10vh",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <Image
                    pos="absolute"
                    ml="auto"
                    h="980px"
                    bg="#C7FFF6"
                    style={{overflow: "hidden"}}
                    src={schedule_bg}
                    alt="schedule background"
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align="center"
                    ta="center"
                    maw="900px"
                    pb="105px"
                    style={{zIndex: "100"}}
                >
                    <Flex justify="flex-end" gap="md" px="md" m="10vh 0vh -.85vh 100vh">
                        <Image
                            h="12vh"
                            src={day1Image}
                            onClick={() => switchDay("day1")}
                        />
                        <Image
                            h="12vh"
                            src={day2Image}
                            onClick={() => switchDay("day2")}
                        />
                    </Flex>
                    <Flex
                        direction="column"
                        w="100%"
                        className="main-container"
                        style={{
                            backgroundColor: "rgba(255,255,255,.7)",
                            borderRadius: "35px",
                        }}
                    >
                            <Box c="#00629b" fz="40px" className="header_text">Schedule</Box>
                        <Divider/>
                        <br></br>
                        <ScrollArea h={500}>
                            <Flex direction="column" p="xl" gap="xs">
                                {day === "day1" ? <Day1/> : <Day2/>}
                            </Flex>
                        </ScrollArea>
                        <br></br>
                    </Flex>
                </Flex>
            </div>

            <Flex
                top="8vh"
                w="100%"
                pos="relative"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#C7FFF6"
                p="10vh 0vh 22vh 0vh"
            >
                <Text className="header_text" fz="50px" c="#1f506e">Speakers</Text>
                <Text className="body_text" c="#1f506e" fz="20px">Coming Soon ...</Text>
            </Flex>

            <FAQ />

            <div style={{position: "relative", width: "100%"}}>
                <Image bg="#1E2C42" pb="15vh" src={sunset} w="auto" />
                <Flex
                    w="100%"
                    bg="#1E2C42"
                    gap="md"
                    pos="relative"
                    display="flex"
                    direction={"column"}
                    justify={"center"}
                    align="center"
                    pb="5vh"
                >
                    <div
                        className="header_text"
                        style={{color: "white", fontSize: "50px", margin: "0", position: "relative"}}>
                        Sponsors
                    </div>
                    <Image
                        w="380px"
                        src={sponsors_banner}
                        style={{color: 'white', marginBottom: "20px", zIndex: 100}}
                        alt="ducks on pedestal over sponsors"
                    />
                    <LogosGrid />
                    <Text
                        className="body_text"
                        fz="20px"
                        c="#FCE147"
                    >
                        And more! Coming soon ...
                    </Text>
                </Flex>

                <Flex bg="#253E63" p="20px" c="white" fz="12px" direction={"column"}>
                    <Box>
                        Made with <Box c="#fc3f3f">{" <3"}</Box> by the VandyHacks team
                    </Box>
                    <Anchor
                        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        target="_blank"
                        underline="always"
                        pos="absolute"
                        right="12px"
                        c="white" fz="12px"
                    >
                        MLH Code of Conduct
                    </Anchor>
                </Flex>
            </div>
        </>
    );
}

export default Mobile
