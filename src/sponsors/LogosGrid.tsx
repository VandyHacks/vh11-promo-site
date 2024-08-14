import React from "react";
import {Image, Flex, Text, Grid} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";
import "./Sponsors.css";
import asurion from "../assets/sponsors_logos/asurion-vector-logo.svg";
import phosphorus from "../assets/sponsors_logos/asurion-vector-logo.svg"
import grainger from "../assets/sponsors_logos/asurion-vector-logo.svg";
import mongodb from "../assets/sponsors_logos/asurion-vector-logo.svg";
import capitalone from "../assets/sponsors_logos/asurion-vector-logo.svg";

const sponsors = [
    {
        name: asurion,
        link: "x.vandyhacks.org",
        span: 1,
    },
    {
        name: grainger,
        link: "x.vandyhacks.org",
        span: 4,
    },
    {
        name: capitalone,
        link: "x.vandyhacks.org",
        span: 4,
    },
    {
        name: mongodb,
        link: "x.vandyhacks.org",
        span: 6,
    },
    {
        name: phosphorus,
        link: "x.vandyhacks.org",
        span: 6,
    },
    {
        name: asurion,
        link: "x.vandyhacks.org",
        span: 4,
    },
    {
        name: grainger,
        link: "x.vandyhacks.org",
        span: 4,
    },
    {
        name: capitalone,
        link: "x.vandyhacks.org",
        span: 4,
    },
    {
        name: mongodb,
        link: "x.vandyhacks.org",
        span: 6,
    },
    {
        name: phosphorus,
        link: "x.vandyhacks.org",
        span: 6,
    }
]

function LogoMap() {
    const {height, width} = useViewportSize();

    return (
        <Grid grow gutter="sm" justify="center" align="flex-end">
            {sponsors.map((sponsor) => (

                <div className="sponsor_logo">
                    <Grid.Col span={sponsor.span}>
                        <Image
                            w="50vh"
                            src={sponsor.name}
                            alt="sponsor logo"
                        />
                    </Grid.Col>
                </div>

            ))}
        </Grid>
    );
}

export default LogoMap;
