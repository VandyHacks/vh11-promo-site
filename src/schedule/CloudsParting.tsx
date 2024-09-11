import React, { useEffect, useRef } from "react";
import {Box, Image} from "@mantine/core";
import "../index.css";
import cloudleft from "../assets/schedule/cloudpartleft.svg";
import cloudright from "../assets/schedule/cloudpartright.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CloudsParting() {

    const parallaxcloudRef = useRef<HTMLDivElement>(null);
    const cloudleftRef = useRef<HTMLImageElement>(null);
    const cloudrightRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxcloudRef.current,
                start: "bottom 5300",  // Animation starts when top of trigger hits bottom of viewport
                end: "bottom top",   // Animation ends when bottom of trigger hits top of viewport
                scrub: true,
                pin: false,
            },
        });

        tl.to(cloudleftRef.current, { x: "-100vh", ease: "Power1.easeOut" }, 0);
        tl.to(cloudrightRef.current, { x: "100vh", ease: "Power1.easeOut" }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, []);

    return (
        <Box
            top="75%"
            pos="absolute"
            w="100%"
            pb="300px"
            style={{overflow: "hidden", zIndex: 10000}}
        >
            <Image ref={cloudleftRef} src={cloudleft} pos="absolute" w="50%"/>
            <Image ref={cloudrightRef} src={cloudright} pos="absolute" w="50%" right="0px"/>
        </Box>
    );
}

export default CloudsParting;
