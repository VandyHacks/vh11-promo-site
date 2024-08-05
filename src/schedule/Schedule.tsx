import React from "react";
import { Image, Flex, Text, Button, Divider, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import schedule_bg from "../assets/schedule_background.svg";
import day_1 from "../assets/Day1.svg";
import day_1_selected from "../assets/Day1Selected.svg";
import day_2 from "../assets/Day2.svg";
import day_2_selected from "../assets/Day2Selected.svg";

import CategoryIndicator from "./CategoryIndicator";
import Day1 from "./Day1";

function Schedule() {
    const { height, width } = useViewportSize();

    return (
        <>
            <div>
                <Image w="100%" src={schedule_bg} alt="schedule background" />
                <Flex justify="flex-end" gap="md" px="md">
                    <Image src={day_1_selected} />
                    <Image src={day_2_selected} />
                </Flex>
                <Flex direction="column" w="100%" className="main-container">
                    <Flex
                        w="100%"
                        justify="space-between"
                        align="center"
                        p="md"
                    >
                        <Title>Schedule</Title>
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
                            <CategoryIndicator category="food" name="Food" />
                        </Flex>
                    </Flex>
                    <Divider />
                    <Flex direction="column" p="lg" gap="sm">
                        <Day1 />
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

export default Schedule;
