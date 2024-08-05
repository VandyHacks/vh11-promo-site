import React from "react";
import "./about/About.css";
import "./hero/DuckAnimations.css";
import Hero from "./hero/Hero";
import Temp_Hero from "./Temp_Hero";
import MlhBanner from "./MlhBanner";
import About from "./about/About";
import Schedule from "./schedule/Schedule";
import FAQ from "./faq/FAQ";
import Speakers from "./speakers/Speakers";
import Sponsors from "./sponsors/Sponsors";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <>
            <MantineProvider>
                <MlhBanner />
                <Hero />
                <About />
                <Schedule />
                <Speakers />
                <FAQ />
                <Sponsors />
            </MantineProvider>
        </>
    );
}

export default App;
