import React from "react";
import {Flex} from "@mantine/core";
import {FaInstagram, FaAnchor, FaDiscord, FaGithub, FaTwitter, FaYoutube} from "react-icons/fa";

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
        link: "https://discord.gg/WUMXjsZ6SF",
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

function SocialMediaIcons() {
    return (
        <Flex
            gap="22px"
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
                    <div className="social_icons" key={ico.name}>
                        {React.createElement(ico.icon)}
                    </div>
                </a>
            ))}
        </Flex>
    );
}

export default SocialMediaIcons;
