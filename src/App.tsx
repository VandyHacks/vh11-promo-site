import React from "react";
import '@mantine/core/styles.css';

import "./about/About.css";
import "./hero/DuckAnimations.css";
import "./schedule/Schedule.css";
import Hero from "./hero/Hero";
import MlhBanner from "./MlhBanner";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {
    return (
        <>
            <MantineProvider>
                <MlhBanner />
                <Hero />
            </MantineProvider>
        </>
    );
}

export default App;
