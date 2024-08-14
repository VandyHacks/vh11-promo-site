import React from "react";
import {Flex, Box} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Footer() {
    const { height, width } = useViewportSize();

    return (
        <Flex bg="#333333" gap="6px" p="20px" c="white" fz="20px">
            Made with <Box c="#fc3f3f">{" <3"}</Box> by the VandyHacks team
        </Flex>
);
}

export default Footer;
