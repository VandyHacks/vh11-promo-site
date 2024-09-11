import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Image, Text, Flex, Box } from "@mantine/core";
import aboutHill1 from "../assets/about/about_hill_1.svg";
import aboutHill2 from "../assets/about/about_hill_2.svg";
import aboutHill3 from "../assets/about/about_hill_3.svg";
import aboutHill4 from "../assets/about/about_hill_4.svg";
import about_road from "../assets/about/about_road.svg";
import ducky_red from "../assets/hero/ducky_red.svg";
import flag from "../assets/about/transition_flag.svg";
import CloudsParting from "../schedule/CloudsParting";

type ScreenSize = 'small' | 'medium' | 'large';

function About() {
    const [gradientProgress, setGradientProgress] = useState(100);
    const [screenSize, setScreenSize] = useState<ScreenSize>('large');
    const parallaxRef = useRef<HTMLDivElement>(null);
    const hill1Ref = useRef<HTMLImageElement>(null);
    const hill2Ref = useRef<HTMLImageElement>(null);
    const hill3Ref = useRef<HTMLImageElement>(null);
    const hill4Ref = useRef<HTMLImageElement>(null);
    // const roadRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    // const duckyRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setScreenSize('large');
            } else if (window.innerWidth >= 768) {
                setScreenSize('medium');
            } else {
                setScreenSize('small');
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "1600 bottom",
                    scrub: true,
                    pin: false,
                    onUpdate: (self) => {
                        setGradientProgress(100 - Math.ceil(self.progress * 100));
                    },
                },
            });

            tl.to(hill1Ref.current, { y: "100%", ease: "none" }, 0);
            tl.to(hill2Ref.current, { y: "50%", ease: "none" }, 0);
            tl.to(hill3Ref.current, { y: "10%", ease: "none" }, 0);
            tl.to(hill4Ref.current, { y: "-5%", ease: "none" }, 0);
            tl.to(contentRef.current, {y: "-130%", opacity: 1, ease: "none"}, 0);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, []);

    const getHillStyles = (screenSize: ScreenSize) => ({
        hill1: {
            bottom: screenSize === 'large' ? '3%' : screenSize === 'medium' ? '2%' : '0%',
            left: '-5%',
            width: '110%'
        },
        hill2: {
            bottom: screenSize === 'large' ? '-6%' : screenSize === 'medium' ? '-4%' : '-2%',
            left: screenSize === 'large' ? '15%' : screenSize === 'medium' ? '14%' : '8%',
            width: '110%'
        },
        hill3: {
            bottom: screenSize === 'large' ? '3%' : screenSize === 'medium' ? '2%' : '0%',
            left: '-5%',
            width: '110%'
        },
        hill4: {
            bottom: '-3%',
            left: '-5%',
            width: '110%'
        },
        road: {
            bottom: screenSize === 'large' ? '-18%' : screenSize === 'medium' ? '-12%' : '-6%',
            left: '-5%',
            width: '110%'
        },
        content: {
            top: screenSize === 'large' ? '100%' : screenSize === 'medium' ? '95%' : '90%'
        }
    });

    const hillStyles = getHillStyles(screenSize);

    return (
        <div style={{ color: "#C7FFF6", overflow: "hidden" }}>
            <Image
                src={flag}
                pos="relative"
                w="100%"
                ml="auto"
                c="#C7FFF6"
                mt="75vh"
                bg="C7FFF6"
                style={{ color: '#C7FFF6', overflow: "hidden" }}
                alt="covers up hero in organic way"
            />
            <Box ref={parallaxRef} style={{
                height: '100vh',
                position: 'relative',
                background: `linear-gradient(#FFF, #C7FFF6 ${gradientProgress}%)`
            }}>
                <Image ref={hill1Ref} src={aboutHill1} alt="Hill 1" style={{ position: 'absolute', zIndex: 1, ...hillStyles.hill1 }} />
                <Image ref={hill2Ref} src={aboutHill2} alt="Hill 2" style={{ position: 'absolute', zIndex: 2, ...hillStyles.hill2 }} />
                <Image ref={hill3Ref} src={aboutHill3} alt="Hill 3" style={{ position: 'absolute', zIndex: 3, ...hillStyles.hill3 }} />
                <Image ref={hill4Ref} src={aboutHill4} alt="Hill 4" style={{ position: 'absolute', zIndex: 4, ...hillStyles.hill4 }} />
            {/*    <Box ref={contentRef} style={{*/}
            {/*        w: "100%",*/}
            {/*        position: 'absolute',*/}
            {/*        top: '100%',*/}
            {/*        left: '50%',*/}
            {/*        transform: 'translate(-50%, -50%)',*/}
            {/*        textAlign: 'center',*/}
            {/*        color: 'white',*/}
            {/*        zIndex: 10,*/}
            {/*        opacity: 0,*/}
            {/*        backgroundColor: 'rgba(0, 117, 117, 0.7)',*/}
            {/*        padding: '20px',*/}
            {/*        borderRadius: '15px',*/}
            {/*    }}>*/}
            {/*        <Text className="header_text" fz="45px" style={{color: 'white', marginBottom: '20px'}}>*/}
            {/*            About VandyHacks*/}
            {/*        </Text>*/}
            {/*        <Text className="body_text" fz="15px" style={{color: 'white'}}>*/}
            {/*            Code, collaborate, learn, and network at Vanderbilt's official collegiate hackathon,*/}
            {/*            VandyHacks!*/}
            {/*            <br></br>*/}
            {/*            As one of the largest hackathons in the south, this in-person event includes both student and company-led*/}
            {/*            workshops, a career fair, games, events, full two-day catering, internship panels, speaker events,*/}
            {/*            and the premier 24-hour hackathon with thousand of dollars worth of prizes.*/}
            {/*            VandyHacks has had thousands of projects submitted by students over the course of*/}
            {/*            11 incredible years, and we hope you can join us in this September, 28th-29th.*/}
            {/*            <br></br>*/}
            {/*            We hope to see you on the racetrack at VandyHacks XI!*/}
            {/*        </Text>*/}
            {/*    </Box>*/}
            </Box>
            <Flex
                w="100%"
                direction={"column"}
                justify={"center"}
                align="center"
                ta="center"
                bg="#009e44"
                mt="-30px"
                style={{
                    zIndex: 10,
                    position: 'relative',
                    backgroundColor: '#009e44'
                }}
            >
                <div className="header_text" style={{color: 'white', zIndex: 10}}>
                    About
                </div>
                <Text
                    className="body_text"
                    c="white"
                    fz="20px"
                    m="10px 100px 20px 100px"
                    style={{zIndex: 10}}
                >
                    Code, collaborate, learn, and network at Vanderbilt's official collegiate hackathon,
                    VandyHacks!
                    <br></br>
                    As one of the largest hackathons in the south, this in-person event includes both student and company-led
                    workshops, a career fair, games, events, full two-day catering, internship panels, speaker events,
                    and the premier 24-hour hackathon with thousand of dollars worth of prizes.
                    VandyHacks has had thousands of projects submitted by students over the course of
                    11 incredible years, and we hope you can join us in this September, 28th-29th.
                    <br></br>
                    We hope to see you on the racetrack at VandyHacks XI!
                </Text>
                <Image w="100%" mt="-25px" src={about_road} alt="road for ducky" style={{zIndex: 10}}/>
                <div className="m_about_curve" style={{zIndex: 10}}>
                    <div>
                        <Image pos="absolute" w="15%" src={ducky_red} alt="Janice" style={{zIndex: 10}}/>
                    </div>
                </div>
                <CloudsParting/>
            </Flex>
            <Box h="80px" bg="#C7FFF6" pos="relative"></Box>
        </div>
    );
    //  <div style={{color: "#C7FFF6"}}>
    //
    //     <Image
    //         w="100%"
    //         bg="#C7FFF6"
    //         pt="50vh"
    //         src={about_top}
    //         alt="top of about page"/>
    //     <Flex
    //         w="100%"
    //         direction={"column"}
    //         justify={"center"}
    //         align="center"
    //         ta="center"
    //         bg="#009e44"
    //     >
    //         <div className="header_text" style={{color: 'white'}}>
    //             About
    //         </div>
    //         <Text
    //             className="body_text"
    //             c="white"
    //             fz="20px"
    //             m="10px 100px 20px 100px"
    //         >
    //             Code, collaborate, learn, explore, and network at Vanderbilt's official collegiate hackathon,
    //             VandyHacks!
    //             <br></br>
    //             As our 11th annual hackathon, this in-person event includes both student and company-led
    //             workshops, a career fair, games, events, full two-day catering, internship panels, speaker events,
    //             and the premier 24-hour hackathon with thousand of dollars in prizes.
    //             As the largest hackathons in the south, VandyHacks has had thousands of
    //             projects submitted by students over the course of 11 incredible years, and we hope you can join
    //             us in this experience this September, 28th-29th.
    //             <br></br>
    //             We hope to see you on the racetrack at VandyHacks XI!
    //         </Text>
    //         <Image w="100%" mt="-25px" src={about_road} alt="road for ducky"/>
    //         <div className="m_about_curve">
    //             <div>
    //                 <Image pos="absolute" w="15%" src={ducky_red} alt="Janice"/>
    //             </div>
    //         </div>
    //
    //     </Flex>
    //     <Image w="100%" bg="#C7FFF6" pb="15vh" src={about_bottom} alt="bottom of about page"/>
    //
    // </div>
}

export default About;
