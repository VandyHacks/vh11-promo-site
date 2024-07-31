import React from "react";
import { Image, Flex, Text, Button, Divider, Title } from "@mantine/core";
import { IconMapPinFilled, IconStar, IconSettings, IconShare, IconCheck } from "@tabler/icons-react";

interface EventProps {
    eventName: string | undefined;
    icon: string | undefined; // check, star, gear, share
    location: string | undefined;
    timeRange: string | undefined;
    category: string | undefined; // events, important, workshops, food
}

function Event(props: EventProps) {
    function matchIcon(icon: string | undefined) {
        switch (icon) {
            case "check":
                return <IconCheck />
            case "star":
                return <IconStar />
            case "gear":
                return <IconSettings />
            case "share":
                return <IconShare />
            default:
                return;
                break;
        }
    }
    return (
        <>
            <Flex
                align="center"
                justify="space-between"
                className={`round ${props.category}-main`}
                p="xs"
            >
                <Flex align="center" gap="md">
                    {props.icon && (
                        matchIcon(props.icon)
                    )}
                    <Text>{props.eventName}</Text>
                </Flex>
                <Flex gap="lg" align="center">
                    {props.location && (
                        <Flex align="center" gap="md">
                            <IconMapPinFilled />
                            <Text>{props.location}</Text>
                        </Flex>
                    )}

                    <Flex
                        className={`round ${props.category}-time`}
                        px="md"
                        py="xs"
                    >
                        <Text>{props.timeRange}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Event;
