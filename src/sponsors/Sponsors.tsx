import React, {useEffect, useRef} from "react";
import {Image, Flex, Text} from "@mantine/core";
import "./Sponsors.css";
import sponsors_banner from "../assets/sponsors/sponsors_banner.svg";
import ducks from "../assets/sponsors/banner_ducks.svg";
import pedastal from "../assets/sponsors/banner_pedastals.svg";
import platform from "../assets/sponsors/banner_platform.svg";
import sunset from "../assets/sponsors/sponsors_sunrise.svg"
import LogosGrid from "./LogosGrid";
import Stars from "../Stars";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useViewportSize} from "@mantine/hooks";

gsap.registerPlugin(ScrollTrigger);

function Sponsors() {

    const { height, width } = useViewportSize();

    const parallaxbannerRef = useRef<HTMLDivElement>(null);
    const ducksref = useRef<HTMLImageElement>(null);
    const pedastalref = useRef<HTMLImageElement>(null);
    const platformref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxbannerRef.current,
                start: "bottom 2800",  // Animation starts when top of trigger hits bottom of viewport
                end: "bottom top",   // Animation ends when bottom of trigger hits top of viewport
                scrub: true,
                pin: false,
            },
        });

        tl.to(ducksref.current, { y: "-500px", ease: "Power1.easeOut" }, 0);
        tl.to(pedastalref.current, { y: "-30%", ease: "Power1.easeOut" }, 0);
        tl.to(platformref.current, { y: "-10%", ease: "Power1.easeOut" }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, []);

    return (
        <div style={{position: "relative", width: "100%"}}>
            <Image bg="#1E2C42" pb="15vh" src={sunset} w="auto" />
            <Flex
                w="100%"
                bg="#1E2C42"
                gap="md"
                pos="relative"
                display="flex"
                direction={"column"}
                justify={"center"}
                align="center"
                pb="40px"
            >
                <div
                    className="header_text"
                    style={{color: "white", fontSize: "90px", margin: "0", position: "relative", zIndex: 100}}>
                    Sponsors
                </div>
                <Stars page="spons"/>
                <Image w="700px" src={ducks} ref={ducksref} mt="90px" alt="ducks on pedestal over sponsors" />
                <Image w="700px" src={pedastal} ref={pedastalref}  mt="-460px" pos="absolute" alt="ducks on pedestal over sponsors" />
                <Image w="700px" src={platform} ref={platformref} mt="-690px" pos="absolute" alt="ducks on pedestal over sponsors" />
                <LogosGrid />
                <Text
                    className="body_text"
                    fz="30px"
                    c="#FCE147"
                >
                    Coming Soon...
                </Text>
            </Flex>
        </div>
    );
}

export default Sponsors;
