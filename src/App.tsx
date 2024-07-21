import React from "react";
import Hero from "./hero/Hero";
import Temp_Hero from "./Temp_Hero";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
    return (
        <>
            <MantineProvider theme={{
                fontFamilyMonospace: "'Courier Prime', monospace",
            }}>
                <Temp_Hero />
            </MantineProvider>
        </>
    );
}

export default App;
