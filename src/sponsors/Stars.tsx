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
        angle: "360",
    },
]

const genRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const $el = document.body;

const makeStar = (mx: number, my: number, i: number) => {
    const star = document.createElement("div");
    star.classList.add("star");

    const yOffset = 5650;
    // let x = genRandomNumber(0, 100);
    // let y = genRandomNumber(610, 660);

    const { style } = star;

    style.left = mx + "%";
    style.top = my + yOffset + "px";

    style.setProperty(
        "--star-angle",
        Math.ceil(genRandomNumber(0, 180)) + "deg"
    );

    style.setProperty(
        "--anim-duration",
        Math.ceil(genRandomNumber(500, 3000)) + "ms"
    );

    style.setProperty(
        "--anim-delay",
        Math.ceil(genRandomNumber(0, 1500)) + "ms"
    );

    // const textNode = document.createElement("span");
    // textNode.textContent = (i+1).toString();
    // textNode.style.color = "black"; // Set text color to black
    // textNode.style.position = "absolute"; // Position the text relative to the star
    // textNode.style.left = "50%"; // Center the text horizontally
    // textNode.style.top = "50%"; // Center the text vertically
    // textNode.style.transform = "translate(-50%, -50%)"; // Offset the text to the center

    // star.appendChild(textNode);

    return star;
}

const xCoords = [0, 95, 8, 0, 95, 9, 22, 1, 15, 32, 8, 24, 40, 50, 60, 68, 70, 78, 16, 89, 82, 75];
const yCoords = [0, 2, 60, 53, 50, 10, 6, 25, 20, 16, 37, 33, 8, 11, 20, 6, 30, 17, 49, 25, 40, 57];

for (let i = 0; i < 100; i++) {
    $el.append(makeStar(xCoords[i], (yCoords[i]*8), i));
}

// for (let i = 0; i < 30; i++) {
//     $el.append(makeStar());
// }

function Stars() {
    return (
        <>
        </>
    );
}

export default Stars;
