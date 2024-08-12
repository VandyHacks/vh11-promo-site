import React from "react";
import { Image, Text, Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import FlagIcon from "../assets/hero/flag-05.svg";

interface FlagButtonProps {
    name: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
}

function FlagButton(props: FlagButtonProps) {
  const { height, width } = useViewportSize();

    return (
        <>
            <Flex
                top={props.top}
                left={props.left}
                right={props.right}
                bottom={props.bottom}
                className="flag-button"
                onClick={() => console.log("clicked")}
            >
                <Image w="10vw" src={FlagIcon} />
                <Text className="centered-text">{props.name}</Text>
            </Flex>
        </>
    );
}

export default FlagButton;
