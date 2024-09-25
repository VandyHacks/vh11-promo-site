import React from "react";
import Event from "./Event";

function Day2() {

    return (
        <>
            <Event
                eventName="Midnight Snack: Krispy Kreme"
                icon="star"
                location="FGH Atrium"
                timeRange="12:00am - 1:00am"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Breakfast"
                icon="star"
                location="FGH Atrium"
                timeRange="8:00am - 10:00am"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Hacking Ends"
                icon="star"
                location=""
                timeRange="12:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Lunch"
                icon="star"
                location="FGH Atrium"
                timeRange="12:00pm - 2:00pm"
                category="food"
                difficulty=""
            />
            <Event
                eventName="Career Fair"
                icon="share"
                location="FGH 134"
                timeRange="12:00pm - 3:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="How to Demo Your Project"
                icon="share"
                location="FGH 129"
                timeRange="12:30pm - 1:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Cup Stacking Race"
                icon="share"
                location="FGH Atrium"
                timeRange="1:00pm - 1:30pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Judging"
                icon="star"
                location="FGH 132, 136"
                timeRange="1:00pm - 3:00pm"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Closing Ceremony"
                icon="star"
                location="FGH 134"
                timeRange="5:00pm"
                category="important"
                difficulty=""
            />
        </>
    );
}

export default Day2;
