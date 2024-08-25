import React from "react";
import {Image, Box, Flex, ScrollArea, Divider} from "@mantine/core";
import schedule_bg from "../assets/schedule/schedule_background.svg";
import bird from "../assets/schedule/bird.svg";
import day_1 from "../assets/Day1.svg";
import day_1_selected from "../assets/Day1Selected.svg";
import day_2 from "../assets/Day2.svg";
import day_2_selected from "../assets/Day2Selected.svg";
import {useState} from "react";
import CategoryIndicator from "./CategoryIndicator";
import Day1 from "./Day1";
import Day2 from "./Day2";
import CloudsParting from "./CloudsParting";

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
                    paddingTop: "100px",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 100,
                }}
            >
                <Image
                    pos="absolute"
                    ml="auto"
                    h="1080px"
                    bg="#C7FFF6"
                    style={{overflow: "hidden"}}
                    src={schedule_bg}
                    alt="schedule background"
                />
                <Flex
                    direction={"column"}
                    justify={"center"}
                    align="center"
                    ta="center"
                >
                    <Flex justify="flex-end" gap="md" px="md" m="80px 0vh -.85vh 45%" style={{zIndex: 100}}>
                        <Image
                            h="90px"
                            w="auto"
                            src={day1Image}
                            onClick={() => switchDay("day1")}
                        />
                        <Image
                            h="90px"
                            w="auto"
                            src={day2Image}
                            onClick={() => switchDay("day2")}
                        />
                        <Image src={bird} left="43%" top="23%" className="birds"/>
                        <Image src={bird} left="47%" top="18%" style={{animationDelay: "1s"}} className="birds"/>
                        <Image src={bird} left="53%" top="25%" style={{animationDelay: "1.5s"}} className="birds"/>
                    </Flex>
                    <Flex
                        direction="column"
                        w="70%"
                        mih="600px"
                        maw="900px"
                        className="main-container"
                        style={{
                            backgroundColor: "rgba(255,255,255,.7)",
                            borderRadius: "35px",
                            zIndex: 100,
                        }}
                    >
                        <Flex
                            w="100%"
                            justify="space-between"
                            align="center"
                            p="4px 25px 5px 25px"
                            wrap="wrap"
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
                                {day === "day1" ? <Day1/> : <Day2/>}
                            </Flex>
                        </ScrollArea>
                        <br></br>
                    </Flex>
                </Flex>
            </div>
            {/*<Box w="100%" mt="168px" h="100px" bg="#C7FFF6" pos="relative">*/}

            {/*</Box>*/}
        </>
    );
}

export default Schedule;
