import React from "react";
import '@mantine/core/styles.css';
import "./about/About.css";
import "./hero/DuckAnimations.css";
import "./schedule/Schedule.css";
import Hero from "./hero/Hero";
import MlhBanner from "./MlhBanner";
import About from "./about/About";
import Schedule from "./schedule/Schedule";
import FAQ from "./faq/FAQ";
// import Speakers from "./speakers/Speakers";
import Sponsors from "./sponsors/Sponsors";
import Footer from "./Footer";
import TempSpeakers from "./temp_speaker";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <>
            <MantineProvider>
                <MlhBanner />
                <Hero />
                <About />
                <Schedule />
                {/*<Speakers />*/}
                <TempSpeakers />
                <FAQ />
                <Sponsors />
                <Footer />
            </MantineProvider>
        </>
    );
}

export default App;
