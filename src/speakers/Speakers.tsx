import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mantine/core";
import "./Speakers.css";
import TempSpeakerImage from "../assets/tempspeaker.jpeg";
import Pole from "../assets/speakerpole.svg";
import Tire from "../assets/tire.svg";
import ChevronLeft from "../assets/chevronleft.svg";
import ChevronRight from "../assets/chevronright.svg";

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
      style={{ backgroundColor: "#F0EADF", padding: "40px 0" }}
    >
      <p
        style={{
          backgroundColor: "#1f1f1f",
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "160px",
          paddingRight: "160px",
          borderRadius: "16px",
          color: "#FCF8F5",
          fontFamily: "formula1",
          fontWeight: "bold",
          fontSize: "40px",
          marginBottom: "-12px",
        }}
      >
        Speakers
      </p>
      <div
        style={{
          backgroundColor: "#FCF8F5",
          paddingTop: "32px",
          paddingBottom: "32px",
          paddingLeft: "64px",
          paddingRight: "64px",
          border: "18px #1f1f1f solid",
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
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>
            {speakersData[activeIndex].name}
          </p>
          <p style={{ fontSize: "18px" }}>
            {speakersData[activeIndex].content}
          </p>
        </Box>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "96px" }}>
        <img src={Pole} alt="" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <img
            src={ChevronLeft}
            alt=""
            width={50}
            style={{ cursor: "pointer" }}
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
              width: "482px", // Adjust width based on your design
              whiteSpace: "nowrap", // Prevent wrapping of tire items
            }}
          >
            {/* Duplicate the tires for infinite scrolling */}
            {[...Array(2)].flatMap(() =>
              speakersData.map((_, idx) => (
                <img key={idx} src={Tire} alt="" width={150} />
              ))
            )}
          </div>

          <img
            src={ChevronRight}
            alt=""
            width={50}
            style={{ cursor: "pointer" }}
            onClick={scrollRight}
          />
        </div>

        <img src={Pole} alt="" />
      </div>
    </Box>
  );
}

export default Speakers;
