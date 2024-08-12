import React from "react";
import {Button, Flex} from "@mantine/core";
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
        link: "https://discord.com/invite/GVsHeNR9j6",
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
            gap="lg"
            m="2vh"
            direction="row"
            wrap="wrap"
        >
            {icons.map((ico) => (
                <a
                    href={ico.link}
                    target="_blank"
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
