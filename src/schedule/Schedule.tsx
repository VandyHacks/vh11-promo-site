import React from "react";
import {Image, Box, Flex, ScrollArea, Divider} from "@mantine/core";
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
            <div
                style={{
                    backgroundColor: "#C7FFF6",
                    paddingTop: "6vh",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "-2",
                }}
            >
                <Image
                    pos="absolute"
                    ml="auto"
                    h="125vh"
                    style={{overflow: "hidden"}}
                    src={schedule_bg}
                    alt="schedule background"
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align="center"
                    ta="center"
                    maw="130vh"
                    mb="25vh"
                    style={{zIndex: "100"}}
                >
                    <Flex justify="flex-end" gap="md" px="md" m="10vh 0vh -.85vh 100vh">
                        <Image
                            h="12vh"
                            src={day1Image}
                            onClick={() => switchDay("day1")}
                        />
                        <Image
                            h="12vh"
                            src={day2Image}
                            onClick={() => switchDay("day2")}
                        />
                    </Flex>
                    <Flex
                        direction="column"
                        w="100%"
                        className="main-container"
                        style={{
                            backgroundColor: "rgba(255,255,255,.7)",
                            borderRadius: "35px",
                        }}
                    >
                        <Flex
                            w="100%"
                            justify="space-between"
                            align="center"
                            p="4px 25px 5px 25px"
                        >
                            <Box c="#00629b" fz="50px" className="header_text">Schedule</Box>
                            <Flex gap="sm">
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
                        <br></br>
                        <ScrollArea h={500}>
                            <Flex direction="column" p="lg" gap="xs">
                                {day == "day1" ? <Day1/> : <Day2/>}
                            </Flex>
                        </ScrollArea>
                        <br></br>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Schedule;
