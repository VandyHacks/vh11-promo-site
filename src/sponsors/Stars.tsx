import React from "react";
import {Button, Image} from "@mantine/core";
import star_img from "../assets/sponsors/star.svg"

const starmap = [
    {
        top: "5vh",
        left: "10vh",
        angle: "-120",
    },
    {
        top: "10vh",
        left: "40vh",
        angle: "-30",
    },
    {
        top: "30vh",
        left: "30vh",
        angle: "60",
    },
    {
        top: "30vh",
        left: "30vh",
        angle: "-30",
    },
]

function Stars() {
    return (
        <>
            {starmap.map((star) => (
                <div className="star_background">
                    <Image
                        src={star_img}
                        alt="star in background"
                        pos="absolute"
                        mt={star.top}
                        ml={star.left}
                        style={{transform: `rotate(${star.angle}deg)`}}
                    />
                </div>
            ))}
        </>
    );
}

export default Stars;
