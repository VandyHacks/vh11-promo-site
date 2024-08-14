import React from "react";
import {Image, Box, Flex, Text, Button, Divider, Title} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import schedule_bg from "../assets/schedule/schedule_background.svg"
import day_1 from "../assets/Day1.svg";
import day_1_selected from "../assets/Day1Selected.svg";
import day_2 from "../assets/Day2.svg";
import day_2_selected from "../assets/Day2Selected.svg";
import {useState} from "react";
import CategoryIndicator from "./CategoryIndicator";
import Day1 from "./Day1";
import Day2 from "./Day2";

function Schedule() {
    const [day, setDay] = useState("day1");
    const [day1Image, setDay1Image] = useState(day_1_selected);
    const [day2Image, setDay2Image] = useState(day_2);

    function switchDay(dayToSwitch: string) {
        setDay(dayToSwitch);
        switch (dayToSwitch) {
            case "day1":
                setDay1Image(day_1_selected);
                setDay2Image(day_2);
                break;
            case "day2":
                setDay1Image(day_1);
                setDay2Image(day_2_selected);
                break;
            default:
                break;
        }


    }

    return (
        <>
            <div>
                <Image
                    pos="absolute"
                    ml="auto"
                    h="112.5vh"
                    style={{overflow: "hidden", zIndex: "-1"}}
                    src={schedule_bg}
                    alt="schedule background"
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align="center"
                    ta="center"
                    maw="80%"
                    style={{
                        backgroundColor: "rgba(255,255,255,.6)",
                        borderRadius: "10px",
                    }}
                >
                    <Flex justify="flex-end" gap="md" px="md">
                        <Image
                            src={day1Image}
                            onClick={() => switchDay("day1")}
                        />
                        <Image
                            src={day2Image}
                            onClick={() => switchDay("day2")}
                        />
                    </Flex>
                    <Flex direction="column" w="100%" className="main-container">
                        <Flex
                            w="100%"
                            justify="space-between"
                            align="center"
                            p="md"
                        >
                            <Box c="#00629b" fz="40px" className="header_text">Schedule</Box>
                            <Flex gap="md">
                                <CategoryIndicator
                                    category="events"
                                    name="Events"
                                />
                                <CategoryIndicator
                                    category="important"
                                    name="Important"
                                />
                                <CategoryIndicator
                                    category="workshops"
                                    name="Workshops"
                                />
                                <CategoryIndicator category="food" name="Food"/>
                            </Flex>
                        </Flex>
                        <Divider/>
                        <Flex direction="column" p="lg" gap="sm">
                            {day == "day1" ? <Day1/> : <Day2/>}
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Schedule;
