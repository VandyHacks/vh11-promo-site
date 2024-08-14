import React from "react";
import {Image, Flex} from "@mantine/core";

import VHLogo from "../assets/hero/VHlogo_XI.svg";
import JoinButton from "./JoinButton";
import SocialMediaIcons from "./SocialMediaIcons";

function Banner() {
    return (
        <>
            <Flex
                top="3.5vh"
                pos="absolute"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"

            >
                <Image w="80vh" src={VHLogo} alt="VandyHacks Logo"/>

                <div className="header_text" style={{color: '#ff4848'}}>
                    VANDYHACKS XI
                </div>

                <div className="body_text">
                    <div className="hero_text" font-weight={"600px"}>Vanderbilt's Collegiate Hackathon</div>
                    <div className="hero_text" font-weight={"600px"}>Sept. 28-29 | Nashville, TN</div>
                </div>

                <JoinButton/>
                <SocialMediaIcons />

                    {/*<Text className="sub_text">*/}
                    {/*    If you want more information or are interested in sponsoring us,*/}
                    {/*    please contact chloe.p.nixon@vanderbilt.edu*/}
                    {/*</Text>*/}
            </Flex>
        </>
    );
}

export default Banner;
