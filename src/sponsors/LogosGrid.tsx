import React from "react";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import phosphorus from "../assets/sponsors_logos/phosphorus.svg"
import vuIsis from "../assets/sponsors_logos/ISIS-logo.jpg"
import wolfram from "../assets/sponsors_logos/Wolfram_Alpha_2022.svg";

const sponsors = [
    {
        logo: phosphorus,
        link: "https://phosphorus.io/",
        span: 3,
    },
    {
        logo: wolfram,
        link: "https://www.wolframalpha.com/",
        span: 3,
    },
    {
        logo: vuIsis,
        link: "https://www.isis.vanderbilt.edu/",
        span: 3,
    },
]

function LogoMap() {
    // eslint-disable-next-line
    const {height, width} = useViewportSize();

    return (
        <div
            style={{
                width: "96%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                color: "#1E2C42",
                flexWrap: "wrap",
                gap: "24px",
        }}>
            {sponsors.map((sponsor) => (
                <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                    <a key={sponsor.link} href={sponsor.link} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="sponsor_logo" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img
                                style={{ width: "50vh" }}
                                src={sponsor.logo}
                                alt="sponsor logo"
                            />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default LogoMap;
