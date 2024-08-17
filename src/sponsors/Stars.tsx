import React, { useState, useEffect } from 'react';
import {Button, Image} from "@mantine/core";
import star_img from "../assets/sponsors/star.svg";

const genRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const $el = document.body;

const makeStar = (mx: number, my: number, i: number) => {

    return (
        <div
            key={i}
            className="star"
            style={{
                left: `${mx}%`,
                top: `${my}px`,
                transform: `rotate(${Math.ceil(genRandomNumber(0, 180))}deg)`,
                animationDuration: `${Math.ceil(genRandomNumber(700, 2000))}ms`,
                animationDelay: `${Math.ceil(genRandomNumber(0, 1200))}ms`,
            }}
        >
            {/*{i + 1}*/}
        </div>
    );
}

const xCoords = [0, 97, 10, 2, 97, 11, 24, 3, 17, 37, 10, 26, 42, 52, 62, 70, 71, 80, 20, 91, 84, 77];
const yCoords = [5, 2, 60, 53, 50, 10, 6, 25, 20, 22, 37, 30, 8, 11, 20, 6, 30, 17, 46, 25, 40, 57];

function Stars() {

    const [starElements, setStarElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const stars = [];

        for (let i = 0; i < xCoords.length; i++) {
            stars.push(makeStar(xCoords[i], yCoords[i] * 8, i));
        }

        setStarElements(stars);
    }, []); // Empty dependency array ensures this runs only once


    return (
        <div className="stars_container">
            {starElements}
        </div>
    );
}

export default Stars;
