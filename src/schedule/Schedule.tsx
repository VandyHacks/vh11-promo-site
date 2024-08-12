import React from "react";
import { Image, Flex, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import schedule_bg from "../assets/schedule/schedule_background.svg"

function Schedule() {
    const { height, width } = useViewportSize();

    return (
        <>

            <div>
                <div className="header_text">
                    Sedule
                </div>
                <Image
                    ml="auto"
                    h="112.5vh"
                    style={{overflow: "hidden"}}
                    src={schedule_bg}
                    alt="schedule background"/>

            </div>
        </>
    );
}

export default Schedule;
