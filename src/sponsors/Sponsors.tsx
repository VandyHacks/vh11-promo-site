import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Sponsors() {
    const { height, width } = useViewportSize();

    return (
        <>

            <div>
                me when im the Sponsor:
            </div>
        </>
    );
}

export default Sponsors;
