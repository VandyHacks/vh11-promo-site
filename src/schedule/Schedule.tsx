import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import schedule_bg from "../assets/schedule_background.svg"

function Schedule() {
    const { height, width } = useViewportSize();

    return (
        <>

            <div>
                <Image w="100%" src={schedule_bg} alt="schedule background"/>

            </div>
        </>
    );
}

export default Schedule;
