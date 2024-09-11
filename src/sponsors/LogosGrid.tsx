import React from "react";
import {Image, Anchor, Grid} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import phosphorus from "../assets/sponsors_logos/phosphorus.svg"
import capitalone from "../assets/sponsors_logos/Capital_One_logo.svg";
import vuisis from "../assets/sponsors_logos/ISIS-logo.jpg";
import wolfram from "../assets/sponsors_logos/Wolfram_Alpha_2022.svg";

const sponsors = [
    {
        logo: capitalone,
        link: "https://www.capitalonecareers.com/internship-programs",
        span: 3,
    },
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
        logo: vuisis,
        link: "https://www.isis.vanderbilt.edu/",
        span: 3,
    },
]

function LogosGrid() {
    // eslint-disable-next-line
    const {height, width} = useViewportSize();

    return (
        <Grid w="96%" grow gutter="xl" justify="center" align="flex-end" c="#1E2C42">
            {sponsors.map((sponsor) => (
                <Anchor href={sponsor.link} target="_blank" underline="never">
                    <div className="sponsor_logo">
                        <Grid.Col span={"auto"}>
                            <Image
                                w="50vh"
                                src={sponsor.logo}
                                alt="sponsor logo"
                            />
                        </Grid.Col>
                    </div>
                </Anchor>

            ))}
        </Grid>
    );
}

export default LogosGrid;
