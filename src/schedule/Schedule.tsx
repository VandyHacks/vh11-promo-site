import React from "react";
import { Image, Flex, Text, Button } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import schedule_bg from "../assets/schedule_background.svg";
import Day1 from "./Day1";

function Schedule() {
    const { height, width } = useViewportSize();

    return (
        <>
            <div>
                <Image w="100%" src={schedule_bg} alt="schedule background" />
                <Day1 />
            </div>
        </>
    );
}

export default Schedule;
