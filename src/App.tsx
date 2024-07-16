import React from "react";
import Hero from "./hero/Hero";
import Temp_Hero from "./Temp_Hero";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <>
            <MantineProvider>
                <Temp_Hero />
            </MantineProvider>
        </>
    );
}

export default App;
