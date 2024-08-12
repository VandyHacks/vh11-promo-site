import React from "react";
import {Button} from "@mantine/core";

function JoinButton() {
    return (
        <>
            <a
                href="https://apply.vandyhacks.org"
                target="_blank"
                style={{textDecoration: "none"}}>
                <div className="register">
                    Apply Now
                </div>
            </a>
        </>
    );
}

export default JoinButton;
