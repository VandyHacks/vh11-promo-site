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
                timeRange="9:00am - 12:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Opening Ceremony"
                icon="star"
                location="FGH Atrium"
                timeRange="11:00pm - 11:30pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Team Matching"
                icon="share"
                location="FGH 110"
                timeRange="11:30pm - 12:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Lunch"
                icon="star"
                location="FGH Atrium"
                timeRange="11:30am - 2:00pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Hacking Begins!"
                icon="star"
                location=""
                timeRange="12:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Intro to Web-Dev"
                icon="gear"
                location="FGH 132"
                timeRange="1:00pm - 2:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Mobile App Development"
                icon="gear"
                location="FGH 136"
                timeRange="2:00pm - 3:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="TypeRacing"
                icon="share"
                location="FGH Atrium"
                timeRange="2:30pm - 4:30pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="MongoDB Databases"
                icon="gear"
                location="FGH 132"
                timeRange="3:00pm - 4:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="CyberSecurity"
                icon="gear"
                location="FGH 136"
                timeRange="4:00pm - 5:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="ChatGPT Wrapper How-to"
                icon="gear"
                location="FGH 132"
                timeRange="5:00pm - 6:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="Data Viz & Bioinformatics"
                icon="gear"
                location="FGH 136"
                timeRange="6:00pm - 7:00pm"
                category="workshops"
                difficulty="Hard"
            />
            <Event
                eventName="Dinner"
                icon="star"
                location="FGH Atrium"
                timeRange="7:00pm - 9:00pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Scooter Race"
                icon="share"
                location="FGH Atrium"
                timeRange="7:00pm - 8:30pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Relay Race Competition"
                icon="share"
                location="FGH Atrium"
                timeRange="8:00pm - 9:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Mario Kart Racing"
                icon="share"
                location="FGH 132"
                timeRange="9:00pm - 12:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Midnight Snack"
                icon="star"
                location="FGH Atrium"
                timeRange="12:00am - 1:00am"
                category="food"
                difficulty=""
            />
        </>
    );
}

export default Day1;
