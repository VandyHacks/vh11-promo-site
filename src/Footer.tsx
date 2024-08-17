import React from "react";
import {Flex, Box, Anchor} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Footer() {
    const { height, width } = useViewportSize();

    return (
        <Flex bg="#253E63" p="20px" c="white" fz="20px" pos="relative" bottom="0px">
            <Flex gap="6px">
                Made with <Box c="#fc3f3f">{" <3"}</Box> by the VandyHacks team
            </Flex>
            <Anchor
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                underline="always"
                pos="absolute"
                right="20px"
                 c="white" fz="20px"
            >
                MLH Code of Conduct
            </Anchor>
        </Flex>
);
}

export default Footer;
