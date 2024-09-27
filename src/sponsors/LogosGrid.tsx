import React from "react";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import phosphorus from "../assets/sponsors_logos/phosphorus.svg"
import vuIsis from "../assets/sponsors_logos/ISIS-logo.jpg"
import wolfram from "../assets/sponsors_logos/Wolfram_Alpha_2022.svg";
import capone from "../assets/sponsors_logos/Capital_One_logo.svg";
import salesforce from "../assets/sponsors_logos/salesforce.svg";
import mlh from "../assets/sponsors_logos/Mlh-logo-color.svg";
import perplexityai from "../assets/sponsors_logos/Perplexity_AI_logo.svg";
import brightdata from "../assets/sponsors_logos/brightdata.png"

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
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://www.capitalonecareers.com/students"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={capone}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://phosphorus.io/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={phosphorus}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://mlh.io/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={mlh}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://www.wolframalpha.com/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={wolfram}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://www.isis.vanderbilt.edu/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={vuIsis}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://careers.salesforce.com/en/university/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={salesforce}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"https://www.perplexity.ai/hub/careers/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={perplexityai}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>
            <div style={{flex: "1 1 auto", justifyContent: "center"}}>
                <a key={1} href={"http://brightinitiative.com/"} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}}>
                    <div className="sponsor_logo"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img
                            style={{width: "50vh"}}
                            src={brightdata}
                            alt="sponsor logo"
                        />
                    </div>
                </a>
            </div>

        </div>
    );
}

export default LogoMap;
