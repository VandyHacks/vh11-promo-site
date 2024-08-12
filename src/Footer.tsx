import React from "react";
import { Box} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Footer() {
    const { height, width } = useViewportSize();

    return (
        <Box bg="#333333" p="20px">
            im prezzy of VH and i love suckign cock !!!!!
        </Box>
);
}

export default Footer;
