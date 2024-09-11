import React from 'react';
import {Image, Box} from "@mantine/core";
import start_flag from "../assets/hero/flag_start_button.svg";
import VHLogo from "../assets/hero/VHlogo-skewed.svg";
import VHLogo_mask from "../assets/hero/VHlogo_mask.svg";
import {FaInstagram, FaAnchor, FaDiscord, FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";
import SocialMediaFixed from "./SocialMediaFixed";


function BannerFixed() {

    return (
        <div>
            <Box
                pos="fixed"
                top="230px"
                left="8%"
                className="VHlogo_flash"
            >
                <Image
                    w="630px"
                    src={VHLogo}
                />
            </Box>
            <Box
                pos="fixed"
                top="230px"
                left="8%"
            >
                <Image
                    w="630px"
                    src={VHLogo_mask}
                />
            </Box>

        {/*    <Box*/}
        {/*        top="240px"*/}
        {/*        pos="fixed"*/}
        {/*        left="5%"*/}
        {/*        style={{overflow: "hidden"}}*/}
        {/*    >*/}
        {/*        <SocialMediaFixed />*/}
        {/*    </Box>*/}
        </div>
    );
}

export default BannerFixed;
