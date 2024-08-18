import React, { useState, useEffect } from 'react';

const genRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const makeStar = (page: string, mx: number, my: number, i: number) => {

    return (
        <div
            key={i}
            className={`${page}_star`}
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

interface StarProps {
    page: string;
}

function Stars(props: StarProps) {

    const [starElements, setStarElements] = useState<JSX.Element[]>([]);

    let xCoords: number[];
    let yCoords: number[];

    if (props.page === "spons") {
        xCoords = [0, 95, 10, 2, 96, 11, 24, 3, 17, 37, 10, 26, 42, 52, 62, 70, 71, 80, 20, 91, 84, 77];
        yCoords = [5, 2, 60, 53, 50, 10, 6, 25, 20, 22, 37, 30, 8, 11, 20, 6, 30, 17, 46, 25, 40, 57];
    } else {
        xCoords = [0, 92, 5, 98, 96, 9, 26, 4, 20, 34, 13, 30, 37, 62, 65, 70, 73, 80, 23, 91, 85, 77];
        yCoords = [1, 2, 13, 13, 3, 2, 2, 6, 7, 14, 9, 7, 3, 2, 12, 1, 8, 4, 16, 12, 8, 13];

    }

    useEffect(() => {
        const stars = [];

        for (let i = 0; i < xCoords.length; i++) {
            stars.push(makeStar(props.page, xCoords[i], yCoords[i] * 8, i));
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
