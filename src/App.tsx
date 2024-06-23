import React from "react";
import Banner from "./Banner";
import JoinButton from "./JoinButton";
import FlagButton from "./FlagButton";

function App() {
    return (
        <>
            <Banner />
            <JoinButton />
            <FlagButton name="About" />
            <FlagButton name="FAQ" />
            <FlagButton name="Sponsors" />
            <FlagButton name="Schedule" />

        </>
    );
}

export default App;
