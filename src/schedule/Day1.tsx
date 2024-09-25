import React from "react";
import Event from "./Event";

function Day1() {

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
                location="FGH 134"
                timeRange="11:00am - 11:30am"
                category="important"
                difficulty=""
            />
            <Event
                eventName="Team Matching"
                icon="share"
                location="FGH 132"
                timeRange="11:30am - 12:00pm"
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
                eventName="Intro to Web Development"
                icon="gear"
                location="FGH 134"
                timeRange="1:00pm - 2:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Mobile App Development"
                icon="gear"
                location="FGH 134"
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
                eventName="ChatGPT Wrapper How-To"
                icon="gear"
                location="FGH 134"
                timeRange="3:00pm - 4:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="MongoDB Databases"
                icon="gear"
                location="FGH 134"
                timeRange="4:00pm - 5:00pm"
                category="workshops"
                difficulty="Medium"
            />
            <Event
                eventName="CyberSecurity"
                icon="gear"
                location="FGH 134"
                timeRange="5:00pm - 6:00pm"
                category="workshops"
                difficulty="Easy"
            />
            <Event
                eventName="Data Viz & Bioinformatics"
                icon="gear"
                location="FGH 134"
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
                location="FGH 132"
                timeRange="8:00pm - 9:00pm"
                category="events"
                difficulty=""
            />
            <Event
                eventName="Intern Panel"
                icon="share"
                location="FGH 134"
                timeRange="9:00pm - 10:00pm"
                category="workshops"
                difficulty=""
            />
            <Event
                eventName="Mario Kart Racing"
                icon="share"
                location="FGH 132"
                timeRange="10:00pm - 12:00pm"
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
