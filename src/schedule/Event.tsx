import React from "react";
import { Flex, Text } from "@mantine/core";
import {
    IconMapPinFilled,
    IconStar,
    IconSettings,
    IconShare,
    IconCheck,
} from "@tabler/icons-react";

interface EventProps {
    eventName: string | undefined;
    icon: string | undefined; // check, star, gear, share
    location: string | undefined;
    timeRange: string | undefined;
    category: string | undefined; // events, important, workshops, food
    difficulty: string | undefined; // Easy, Medium, Hard
}

function Event(props: EventProps) {
    function matchIcon(icon: string | undefined) {
        switch (icon) {
            case "check":
                return <IconCheck />;
            case "star":
                return <IconStar />;
            case "gear":
                return <IconSettings />;
            case "share":
                return <IconShare />;
            default:
                return;
        }
    }
    return (
        <>
            <Flex
                align="stretch"
                justify="space-between"
                className={`round ${props.category}-main`}
            >
                <Flex align="center" gap="md">
                    {props.icon && (
                        <Flex
                            className={`${props.category}-icon`}
                            mx="xs"
                            my="8px"
                        >
                            {matchIcon(props.icon)}
                        </Flex>
                    )}
                    <Text
                        ff="Helvetica"
                        fz="18px"
                        fw="bold"
                        ml="-10px"
                    >
                        {props.eventName}
                    </Text>
                    {props.difficulty && <Flex py="3px" px="xs" className="round workshops-difficulty">{props.difficulty}</Flex>}
                </Flex>
                <Flex gap="md" align="center" >
                    {props.location && (
                        <Flex align="center" gap="4px">
                            <IconMapPinFilled
                                className={`${props.category}-location`}
                            />
                            <Text ff="Helvetica">{props.location}</Text>
                        </Flex>
                    )}

                    <Flex
                        className={`round ${props.category}-time`}
                        align="center"
                        justify="center"
                    >
                        <Text
                            ff="Helvetica"
                            fz="16px"
                            fw="bold"
                        >
                            {props.timeRange}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Event;
