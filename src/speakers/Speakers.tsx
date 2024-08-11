import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Speakers() {
    const { height, width } = useViewportSize();

    return (
        <>

            <div>
                me when im the speaker:
            </div>
        </>
    );
}

export default Speakers;
