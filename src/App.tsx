import React from "react";
import Hero from "./hero/Hero";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <>
            <MantineProvider>
                <Hero />
            </MantineProvider>
        </>
    );
}

export default App;
