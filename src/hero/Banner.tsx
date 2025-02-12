import React, { useEffect, useState } from 'react';
import {Image, Flex, Box} from "@mantine/core";
import VHLogo from "../assets/hero/VHlogo_XI.svg";
import JoinButton from "./JoinButton";
import SocialMediaIcons from "./SocialMediaIcons";

function Banner() {

    const [scrollPos, setScrollPos] = useState(0);
    const [fadeClass, setFadeClass] = useState('');



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const triggerHeight = 0; // Adjust this value as needed

            if (currentScrollPos > triggerHeight && currentScrollPos > scrollPos) {
                setFadeClass('bannerFadeOut');
            } else if (currentScrollPos < scrollPos) {
                setFadeClass('bannerFadeIn');
            }

            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    return (
        <>
            <Flex
                top="5vh"
                pos="absolute"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
            >
                <Box
                    bg="rgba(255,250,240, .9)"
                    bd="7px solid #FCEFD9"
                    pos="relative"
                    p="xl"
                    pb="0vh"
                    style={{borderRadius: "25px", zIndex: 10}}
                    className={`fade-element ${fadeClass}`}
                >
                <Image w="575px" src={VHLogo} alt="VandyHacks Logo"/>

                <div className="header_text" style={{color: '#fc3f3f'}}>
                    VANDYHACKS XI
                </div>

                <div className="body_text">
                    <div className="hero_text" font-weight={"900px"}>Vanderbilt's Collegiate Hackathon</div>
                    <div className="hero_text" font-weight={"600px"}>Sept. 28-29 | Nashville, TN</div>
                </div>

                <JoinButton/>
                <SocialMediaIcons />

                    {/*<Text className="sub_text">*/}
                    {/*    If you want more information or are interested in sponsoring us,*/}
                    {/*    please contact chloe.p.nixon@vanderbilt.edu*/}
                    {/*</Text>*/}
                </Box>
            </Flex>
        </>
    );
}

export default Banner;
