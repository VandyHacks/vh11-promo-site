import React, {useRef, useEffect, useState} from "react";
import {Box, Image} from "@mantine/core";
import "./Speakers.css";
import TempSpeakerImage from "../assets/speakers/tempspeaker.jpeg";
import Pole from "../assets/speakers/speakerpole.svg";
import Tire from "../assets/speakers/tire.svg";
import ChevronLeft from "../assets/speakers/chevronleft.svg";
import ChevronRight from "../assets/speakers/chevronright.svg";

const speakersData = [
    {
        name: "John Doe",
        subheading: "CEO, Tech Innovations",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: TempSpeakerImage,
    },
    {
        name: "Jane Smith",
        subheading: "AI Researcher, Future Labs",
        content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: TempSpeakerImage,
    },
    {
        name: "Alex Johnson",
        subheading: "Founder, StartUp Co.",
        content:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: TempSpeakerImage,
    },
    {
        name: "Sarah Brown",
        subheading: "CTO, InnovateTech",
        content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: TempSpeakerImage,
    },
];

function Speakers() {
    const tireContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollLeft = () => {
        if (tireContainerRef.current) {
            tireContainerRef.current.scrollBy({
                left: -166, // Adjust this value to scroll by more or less
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (tireContainerRef.current) {
            tireContainerRef.current.scrollBy({
                left: 166, // Adjust this value to scroll by more or less
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = tireContainerRef.current;
        if (!container) return;

        const tireWidth = 150 + 16; // Tire width + gap
        const numberOfTires = speakersData.length;

        const handleScroll = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;

            // Adjust the scroll position to create the infinite loop effect
            if (scrollLeft <= 0) {
                container.scrollLeft = maxScrollLeft / 2 + tireWidth + tireWidth / 2;
            } else if (scrollLeft >= maxScrollLeft) {
                container.scrollLeft = maxScrollLeft / 2 - tireWidth - tireWidth / 2;
            }

            const newIndex =
                Math.round(container.scrollLeft / tireWidth) % numberOfTires;
            setActiveIndex(newIndex >= 0 ? newIndex : numberOfTires + newIndex);
        };

        container.addEventListener("scroll", handleScroll);

        // Set initial scroll position to avoid starting at the very beginning
        container.scrollLeft = container.scrollWidth / 2;

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box
            className="speakers-container"
            pos="relative"
            style={{padding: "40px"}}
        >
            <p
                style={{
                    backgroundColor: "#1f1f1f",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    borderRadius: "16px",
                    color: "#fff9ed",
                    fontFamily: "formula1",
                    fontSize: "60px",
                    marginBottom: "-12px",
                }}
            >
                Speakers
            </p>
            <div
                style={{
                    backgroundColor: "#fffaf3",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    paddingLeft: "64px",
                    paddingRight: "64px",
                    border: "18px #333333 solid",
                    borderRadius: "24px",
                    width: "900px",
                    height: "450px",
                    flexDirection: "row",
                    display: "flex",
                    gap: "32px",
                    alignItems: "center",
                }}
            >
                <img
                    src={speakersData[activeIndex].image}
                    alt=""
                    style={{
                        width: "300px",
                        height: "350px",
                        objectFit: "cover",
                    }}
                />
                <Box dir="row">
                    <p style={{fontWeight: "bold", fontSize: "24px"}}>
                        {speakersData[activeIndex].name}
                    </p>
                    <p style={{fontSize: "18px"}}>
                        {speakersData[activeIndex].content}
                    </p>
                </Box>
            </div>

            <div style={{display: "flex", flexDirection: "row", gap: "60px"}}>
                <Image src={Pole} h="30vh" alt=""/>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "-30px",
                    }}
                >
                    <img
                        src={ChevronLeft}
                        alt=""
                        width={50}
                        style={{cursor: "pointer"}}
                        onClick={scrollLeft}
                    />

                    <div
                        ref={tireContainerRef}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "16px",
                            overflowX: "auto",
                            scrollBehavior: "smooth",
                            width: "500px", // Adjust width based on your design
                            whiteSpace: "nowrap", // Prevent wrapping of tire items
                        }}
                    >
                        {/* Duplicate the tires for infinite scrolling */}
                        {[...Array(2)].flatMap(() =>
                            speakersData.map((_, idx) => (
                                <img key={idx} src={Tire} alt="" width={150}/>
                            ))
                        )}
                    </div>

                    <img
                        src={ChevronRight}
                        alt=""
                        width={50}
                        style={{cursor: "pointer"}}
                        onClick={scrollRight}
                    />
                </div>

                <Image src={Pole} h="30vh" alt=""/>
            </div>
        </Box>
    );
}

export default Speakers;
