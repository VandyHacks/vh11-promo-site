import React from "react";
import { Image, Flex, Text, Button, Divider, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Event from "./Event";

function Day1() {
    const { height, width } = useViewportSize();

    return (
        <>
            <Event
                eventName="Check In"
                icon="check"
                location="The Wondry 1st Floor"
                timeRange="9:30am-11:30pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Opening Ceremony"
                icon="star"
                location="The Wondry 1st Floor"
                timeRange="12:00pm-3:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Lunch"
                icon="star"
                location="Lobby"
                timeRange="11:00am-12:30pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Patient Safety Challenge"
                icon="gear"
                location="ESB 048"
                timeRange="12:00pm-3:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Scavenger Hunt"
                icon="share"
                location=""
                timeRange="3:00pm-5:00pm"
                category="events"
                difficulty=""
            />
        </>
    );
}

export default Day1;
