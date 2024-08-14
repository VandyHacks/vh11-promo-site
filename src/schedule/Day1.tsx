import React from "react";
import {Image, Flex, Text, Button, Divider, Title} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import Event from "./Event";

function Day1() {
    const {height, width} = useViewportSize();

    return (
        <>
            <Event
                eventName="Check In"
                icon="check"
                location="FGH Atrium"
                timeRange="9:30am-12:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Opening Ceremony"
                icon="star"
                location="FGH Atrium"
                timeRange="11:00pm-11:30pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Hacking Begins"
                icon="star"
                location=""
                timeRange="11:30pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Team Matching"
                icon="share"
                location="FGH 110"
                timeRange="11:30pm-12:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Lunch"
                icon="star"
                location="FGH Atrium"
                timeRange="11:30am-2:00pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Intro to Web-Dev"
                icon="gear"
                location="FGH 132"
                timeRange="1:00pm-2:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Web-Scraping"
                icon="gear"
                location="FGH 132"
                timeRange="2:00pm-3:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="TypeRacing"
                icon="share"
                location=""
                timeRange="2:30pm-4:30pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Ball Scraping"
                icon="gear"
                location="FGH 132"
                timeRange="3:00pm-4:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="Ball Scraping"
                icon="gear"
                location="FGH 132"
                timeRange="4:00pm-5:00pm"
                category="workshops"
                difficulty="Hard"
            />
            <Event
                eventName="ChatGPT Wrapper How-to"
                icon="gear"
                location="FGH 132"
                timeRange="5:00pm-6:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Dinner"
                icon="star"
                location="FGH Atrium"
                timeRange="7:00pm-9:00pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="GeoGuessr Competition"
                icon="share"
                location=""
                timeRange="6:30pm-7:30pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Cup Stacking Race"
                icon="share"
                location=""
                timeRange="7:30pm-8:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Mario Kart Racing"
                icon="share"
                location=""
                timeRange="9:00pm-11:00pm"
                category="events"
                difficulty=""
            />
                <Event
                    eventName="Midnight Snack: Krispy Kreme"
                    icon="star"
                    location="FGH Atrium"
                    timeRange="12:00am-1:00am"
                    category="food"
                    difficulty=""
                />
        </>
    );
}

export default Day1;
