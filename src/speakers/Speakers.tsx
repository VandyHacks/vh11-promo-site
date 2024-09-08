import React, { useState } from "react";
import { Box, Image } from "@mantine/core";
import "./Speakers.css";
import TempSpeakerImage from "../assets/speakers/tempspeaker.jpeg";
import Pole from "../assets/speakers/speakerpole.svg";
import Tire from "../assets/speakers/tire.svg";
import ChevronLeft from "../assets/speakers/chevronleft.svg";
import ChevronRight from "../assets/speakers/chevronright.svg";
import FlagLeft from "../assets/speakers/flag 2.svg";
import FlagRight from "../assets/speakers/flag 3.svg";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const numberOfSpeakers = speakersData.length;

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < numberOfSpeakers - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box
      className="speakers-container"
      pos="relative"
      style={{
        padding: "40px",
        paddingTop: "300px",
        backgroundColor: "#c7fff6",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "end",
          marginBottom: "-20px",
          gap: "20px",
        }}
      >
        <img src={FlagLeft} alt="" />
        <p
          style={{
            backgroundColor: "#1f1f1f",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "100px",
            paddingRight: "100px",
            borderRadius: "16px",
            color: "#fff9ed",
            fontFamily: "formula1",
            fontSize: "60px",
            marginTop: 0,
            marginBottom: "10px",
          }}
        >
          Speakers
        </p>
        <img src={FlagRight} alt="" />
      </div>

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
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>
            {speakersData[activeIndex].name}
          </p>
          <p style={{ fontSize: "18px" }}>
            {speakersData[activeIndex].content}
          </p>
        </Box>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "60px",
          justifyContent: "center",
        }}
      >
        <Image src={Pole} h="30vh" alt="" />

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
            style={{
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
              opacity: activeIndex === 0 ? 0.5 : 1,
            }}
            onClick={scrollLeft}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              overflowX: "hidden",
              width: "538px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                transform: `translateX(calc(50% - ${(3 / 2) * (150 + 16)}px - ${
                  activeIndex * (155 + 16)
                }px))`, // Center the first tire
                transition: "transform 0.5s ease",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {/* Left Dummy Tire */}
              <img
                src={Tire}
                alt="dummy-left"
                width={150}
                style={{ opacity: 0.3 }}
              />

              {/* Main Tires */}
              {[...speakersData].map((_, idx) => (
                <img
                  key={idx}
                  src={Tire}
                  alt=""
                  width={idx === activeIndex ? 180 : 150} // Increase size for active tire
                  height={idx === activeIndex ? 180 : 150} // Match the height with the width
                  style={{
                    opacity: idx === activeIndex ? 1 : 0.5,
                    transition: "width 0.5s ease, height 0.5s ease", // Smooth transition for size change
                  }}
                />
              ))}

              {/* Right Dummy Tire */}
              <img
                src={Tire}
                alt="dummy-right"
                width={150}
                style={{ opacity: 0.3 }}
              />
            </div>
          </div>

          <img
            src={ChevronRight}
            alt=""
            width={50}
            style={{
              cursor:
                activeIndex === numberOfSpeakers - 1
                  ? "not-allowed"
                  : "pointer",
              opacity: activeIndex === numberOfSpeakers - 1 ? 0.5 : 1,
            }}
            onClick={scrollRight}
          />
        </div>

        <Image src={Pole} h="30vh" alt="" />
      </div>

      {/* Add clouds at the bottom of the poles? so it's not floating in the air */}
    </Box>
  );
}

export default Speakers;
