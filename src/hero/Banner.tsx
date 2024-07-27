import React from "react";
import {Image, Flex, Text, Button} from "@mantine/core";

import VHLogo from "../assets/VHlogo_XI.svg";
import JoinButton from "./JoinButton";

function Banner() {
    return (
        <>
            <Flex
                top="4vh"
                pos="absolute"
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                gap="sm"
            >
                <Image w="80vh" src={VHLogo} alt="VandyHacks Logo"/>

                <Text className="header_text" style={{color: '#ff4848'}}>
                    VANDYHACKS XI
                </Text>

                <div className="body_text">

                    <Text className="hero_text" font-weight={"600px"}>Sept. 28-29 | Nashville, TN</Text>

                    <JoinButton/>

                    <Text className="sub_text">
                        If you want more information or are interested in sponsoring us,
                        please contact us at <br></br> chloe.p.nixon@vanderbilt.edu and aryan.garg@vanderbilt.edu
                    </Text>
                </div>
            </Flex>
        </>
    );
}

export default Banner;
