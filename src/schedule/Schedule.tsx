import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import schedule_bg from "../assets/schedule_background.svg"

function Schedule() {
    const { height, width } = useViewportSize();

    return (
        <>

            <div>
                <div className="header_text">
                    Sedule
                </div>
                <Image h="112.5vh" src={schedule_bg} alt="schedule background"/>

            </div>
        </>
    );
}

export default Schedule;
